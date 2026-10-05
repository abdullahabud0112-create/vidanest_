import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import config from "../../next.config.ts";

type Header = { key: string; value: string };
type HeaderRule = { source: string; headers: Header[] };

function getRule(): HeaderRule {
  const rules = (config as { headers?: () => HeaderRule[] }).headers!();
  const rule = rules.find((r) => r.source === "/:path*");
  assert.ok(rule, "global header rule for /:path* is missing");
  return rule;
}

function header(rule: HeaderRule, key: string): string | undefined {
  return rule.headers.find((h) => h.key === key)?.value;
}

test("X-Powered-By is disabled", () => {
  assert.equal((config as { poweredByHeader?: boolean }).poweredByHeader, false);
});

test("all baseline security headers are present", () => {
  const rule = getRule();
  for (const key of [
    "Content-Security-Policy",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Referrer-Policy",
    "Permissions-Policy",
  ]) {
    assert.ok(header(rule, key), `${key} must be set`);
  }
  assert.equal(header(rule, "X-Content-Type-Options"), "nosniff");
  assert.equal(header(rule, "X-Frame-Options"), "DENY");
});

test("CSP contains the hardening directives", () => {
  const csp = header(getRule(), "Content-Security-Policy")!;
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /base-uri 'self'/);
  assert.match(csp, /form-action 'self'/);
  assert.ok(!csp.includes("unsafe-eval"), "unsafe-eval must never be allowed");
  assert.ok(
    !/(?:^|;\s*)(?:script-src|default-src)[^;]*\s\*\s*(?:;|$)/.test(csp),
    "no wildcard origins"
  );
});

test("production build adds HSTS and upgrade-insecure-requests", () => {
  const configFileUrl = new URL("../../next.config.ts", import.meta.url).href;
  const script = `
    import cfg from ${JSON.stringify(configFileUrl)};
    const rule = cfg.headers().find((r) => r.source === "/:path*");
    const get = (k) => rule.headers.find((h) => h.key === k)?.value;
    if (!get("Strict-Transport-Security")) throw new Error("missing HSTS");
    if (!get("Content-Security-Policy").includes("upgrade-insecure-requests"))
      throw new Error("missing upgrade-insecure-requests");
  `;
  const out = execFileSync(process.execPath, ["--input-type=module", "-e", script], {
    env: { ...process.env, NODE_ENV: "production" },
    stdio: "pipe",
  });
  assert.equal(out.length, 0);
});

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-6 h-[1px] bg-border-gold" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted font-sans">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-6 h-[1px] bg-border-gold" />}
        </div>
      )}

      <h2 className="font-serif-luxury text-[34px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-ivory font-normal leading-[1.1] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-secondary font-normal leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

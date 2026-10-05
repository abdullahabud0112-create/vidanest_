import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.14em] uppercase transition-all duration-300 text-center select-none cursor-pointer min-h-[44px]";

  const sizeStyles = {
    sm: "text-[11px] px-5 py-2.5",
    md: "text-xs px-7 py-3.5",
    lg: "text-xs sm:text-sm px-8 sm:px-10 py-3.5 sm:py-4",
  };

  const variantStyles = {
    primary:
      "bg-gold hover:bg-gold-light text-obsidian font-semibold border border-gold hover:border-gold-light",
    secondary:
      "bg-surface hover:bg-surface-hover text-ivory border border-border hover:border-gold",
    outline:
      "bg-transparent text-ivory hover:text-gold border border-border hover:border-gold",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("https://wa.me")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

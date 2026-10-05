import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1320px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

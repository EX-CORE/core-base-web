"use client";

import type { HTMLAttributes } from "react";
import { cn } from "./utils";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number; // 0 ~ 100
}

function Progress({ value = 0, className, ...props }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      data-slot="progress"
      className={cn("relative w-full h-2 bg-slate-200 rounded-full overflow-hidden", className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
      {...props}
    >
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export { Progress };

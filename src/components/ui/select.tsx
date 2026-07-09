import * as React from "react";

import { cn } from "@/lib/utils";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    className={cn(
      "h-14 w-full rounded-sm border border-hairline bg-white px-3 text-base text-ink transition-colors focus:border-ink focus:outline-none disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-muted",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "text-body-sm flex h-12 w-full rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_94%,black_6%)] px-4 py-3 text-[var(--color-foreground)] shadow-sm outline-none transition placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]/55 focus:ring-4 focus:ring-[var(--color-primary)]/12",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };

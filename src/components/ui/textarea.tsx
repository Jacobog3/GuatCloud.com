import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "text-body-sm flex min-h-36 w-full rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_94%,black_6%)] px-4 py-3 text-[var(--color-foreground)] shadow-sm outline-none transition placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-primary)]/55 focus:ring-4 focus:ring-[var(--color-primary)]/12",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };

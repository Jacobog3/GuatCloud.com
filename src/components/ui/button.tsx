import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-body-sm inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] px-5 py-3 text-[var(--color-panel)] shadow-[0_16px_36px_-18px_rgba(255,153,0,0.55)] hover:-translate-y-px hover:bg-[var(--color-primary-strong)]",
        secondary:
          "border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_92%,black_8%)] px-5 py-3 text-[var(--color-foreground)] shadow-sm hover:-translate-y-px hover:border-[var(--color-primary)]/45 hover:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-surface))]",
        ghost:
          "px-3 py-2 text-[var(--color-muted-foreground)] hover:bg-[color-mix(in_srgb,var(--color-surface)_88%,black_12%)] hover:text-[var(--color-foreground)]",
        outlineLight:
          "border border-[color-mix(in_srgb,var(--color-primary)_36%,white)] bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] px-5 py-3 text-white shadow-none hover:border-[color-mix(in_srgb,var(--color-primary)_48%,white)] hover:bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
      },
      size: {
        default: "",
        sm: "px-4 py-2.5 text-[0.87rem]",
        lg: "px-6 py-3.5 text-[0.98rem]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

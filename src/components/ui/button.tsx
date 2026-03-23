import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-primary)] text-[var(--color-panel)] shadow-[0_14px_30px_-18px_rgba(255,153,0,0.5)] hover:-translate-y-px hover:bg-[var(--color-primary-strong)]",
        secondary:
          "border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_94%,black_6%)] text-[var(--color-foreground)] shadow-none hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--color-primary)_32%,var(--color-border))] hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-surface))]",
        nav:
          "border border-[color-mix(in_srgb,var(--color-primary)_20%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-surface))] text-[var(--color-foreground)] shadow-none hover:border-[color-mix(in_srgb,var(--color-primary)_34%,var(--color-border))] hover:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-surface))]",
        ghost:
          "text-[var(--color-muted-foreground)] hover:bg-[color-mix(in_srgb,var(--color-surface)_88%,black_12%)] hover:text-[var(--color-foreground)]",
        outlineLight:
          "border border-[color-mix(in_srgb,var(--color-primary)_36%,white)] bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] text-white shadow-none hover:border-[color-mix(in_srgb,var(--color-primary)_48%,white)] hover:bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
      },
      size: {
        default: "h-11 px-5 text-[0.93rem]",
        sm: "h-10 px-4 text-[0.88rem]",
        lg: "h-12 px-6 text-[0.96rem]"
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

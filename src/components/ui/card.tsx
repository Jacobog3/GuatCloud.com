import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "overflow-hidden rounded-2xl border backdrop-blur-sm transition-shadow duration-300",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-border)] bg-[var(--color-surface)] shadow-none",
        muted:
          "border-[var(--color-border)]/90 bg-[color-mix(in_srgb,var(--color-surface-soft)_98%,black_2%)] shadow-none",
        dark:
          "border-[color-mix(in_srgb,var(--color-accent)_22%,var(--color-border))] bg-[linear-gradient(165deg,#161b22,#0d1117)] text-white shadow-[0_20px_50px_-36px_rgba(0,0,0,0.75)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export type CardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
  )
);

Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />
);

CardContent.displayName = "CardContent";

export { Card, CardContent, cardVariants };

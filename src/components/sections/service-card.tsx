import type { LucideIcon } from "lucide-react";
import { ServiceGlyph } from "@/components/icons/service-glyph";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  slug?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  /** Plain-text partner label (e.g. AWS), not a trademark logo asset. */
  partnerLabel?: string;
};

export function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
  bullets,
  partnerLabel
}: ServiceCardProps) {
  const useCustomGlyph = Boolean(slug);

  return (
    <Card
      variant="default"
      className={cn(
        "group h-full",
        "hover:border-[color-mix(in_srgb,var(--color-accent)_28%,var(--color-border))]",
        "hover:shadow-[0_18px_40px_-32px_rgba(0,0,0,0.45)]"
      )}
    >
      <CardContent className="flex h-full flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="icon-tile size-12 shrink-0 transition group-hover:border-[color-mix(in_srgb,var(--color-accent)_25%,var(--color-border))]">
            {useCustomGlyph ? (
              <ServiceGlyph slug={slug} className="text-[var(--color-primary-strong)]" />
            ) : (
              <Icon className="size-[28px]" strokeWidth={2} />
            )}
          </div>
          {partnerLabel ? (
            <span className="rounded-md border border-[color-mix(in_srgb,var(--color-primary)_16%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-surface-soft)_80%,black_20%)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,var(--color-foreground)_55%,var(--color-muted-foreground))]">
              {partnerLabel}
            </span>
          ) : null}
        </div>
        <div className="space-y-3">
          <h3 className="text-title text-[var(--color-foreground)]">
            {title}
          </h3>
          <p className="text-body text-[var(--color-muted-foreground)]">{description}</p>
        </div>
        {bullets?.length ? (
          <ul className="mt-auto space-y-2 border-t border-[var(--color-border)]/60 pt-4 text-body-sm text-[var(--color-muted-foreground)]">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}

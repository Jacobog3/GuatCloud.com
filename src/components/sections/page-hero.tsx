import { Container } from "@/components/shared/container";
import { HeroCloudVisual } from "@/components/sections/hero-cloud-visual";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="section-space pb-10 sm:pb-12">
      <Container>
        <div className="hero-grid relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 shadow-none sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-4 top-0 w-[min(100%,18rem)] opacity-25 sm:w-[22rem] sm:opacity-35">
            <HeroCloudVisual idPrefix="page-hero" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--color-primary)_12%,transparent),transparent_72%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] lg:items-end">
            <div className="max-w-3xl space-y-5">
              <span className="eyebrow">{eyebrow}</span>
              <h1 className="text-display-sm text-[var(--color-foreground)]">{title}</h1>
              <p className="text-body max-w-2xl text-[var(--color-muted-foreground)]">{description}</p>
            </div>
            {children ? <div className="lg:justify-self-end lg:w-full lg:max-w-sm">{children}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroPlatformVisual } from "@/components/brand/hero-platform-visual";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/content";
import { localizedPath } from "@/lib/paths";
import { isLocale, type Locale } from "@/types/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  return buildMetadata(safeLocale, "home", "/");
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const dictionary = getDictionary(safeLocale);

  const featuredServices = dictionary.home.featuredServiceSlugs
    .map((slug) => dictionary.services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="section-space border-b border-[var(--color-border)] pb-12 sm:pb-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-14">
            <div className="animate-fade-up space-y-8 lg:text-left">
              <div className="space-y-4 text-center lg:text-left">
                <span className="eyebrow">{dictionary.home.eyebrow}</span>
                <p className="capability-strip">{dictionary.home.capabilityStrip}</p>
                <h1 className="text-display text-[var(--color-foreground)]">{dictionary.home.title}</h1>
                <p className="text-body mx-auto max-w-xl text-[var(--color-muted-foreground)] lg:mx-0 lg:max-w-lg">
                  {dictionary.home.description}
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link className="justify-center" href={localizedPath(safeLocale, "/contact")}>
                    {dictionary.home.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link className="justify-center" href={localizedPath(safeLocale, "/services")}>
                    {dictionary.home.secondaryCta}
                  </Link>
                </Button>
              </div>
            </div>
            <HeroPlatformVisual
              className="animate-fade-in max-lg:mx-auto max-lg:max-w-md"
              labels={dictionary.home.heroDiagram}
            />
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3 animate-fade-in">
            {dictionary.home.highlights.map((item) => (
              <div key={item} className="flex gap-3 bg-[var(--color-surface)] p-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <p className="text-body-sm text-[var(--color-muted-foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space-tight border-t border-[var(--color-border)]">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow={dictionary.home.valueEyebrow}
            title={dictionary.home.valueTitle}
            description={dictionary.home.valueDescription}
          />
          <div className="grid gap-10 md:grid-cols-3">
            {dictionary.home.valueItems.map((item, index) => (
              <div key={item.title} className="space-y-3">
                <span className="text-3xl font-bold tabular-nums text-[color-mix(in_srgb,var(--color-accent)_45%,var(--color-muted-foreground))]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-title text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <p className="fine-print">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow={dictionary.home.servicesEyebrow}
            title={dictionary.home.servicesTitle}
            description={dictionary.home.servicesDescription}
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                partnerLabel={service.partnerLabel}
              />
            ))}
          </div>
          <div className="flex justify-center px-1 pt-2">
            <Button asChild variant="secondary" size="lg" className="w-full max-w-md sm:w-auto sm:max-w-none">
              <Link className="justify-center" href={localizedPath(safeLocale, "/services")}>
                {dictionary.home.servicesViewAllCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-space-tight border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_55%,var(--color-background))]">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow={dictionary.home.whyEyebrow}
            title={dictionary.home.whyTitle}
            description={dictionary.home.whyDescription}
          />
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:grid-rows-[1fr_1fr]">
            {dictionary.why.map((item, index) => {
              const Icon = item.icon;
              const featured = index === 0;
              return (
                <Card key={item.title} variant="default" className={`h-full${featured ? " md:row-span-2" : ""}`}>
                  <CardContent className={`flex h-full flex-col gap-4${featured ? " p-8" : " p-6"}`}>
                    <div className={`icon-tile shrink-0${featured ? " size-[3.25rem]" : " size-12"}`}>
                      <Icon
                        className={featured ? "size-[30px]" : "size-[28px]"}
                        strokeWidth={2}
                      />
                    </div>
                  <h3
                    className={`font-semibold tracking-tight text-[var(--color-foreground)]${featured ? " text-[1.55rem] leading-[1.18]" : " text-title"}`}
                  >
                    {item.title}
                  </h3>
                    <p className="fine-print flex-1">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow={dictionary.home.processEyebrow}
            title={dictionary.home.processTitle}
            description={dictionary.home.processDescription}
          />
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-[18px] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent lg:block" />
            <div
              className="pointer-events-none absolute left-[18px] z-0 hidden w-px max-sm:block bg-gradient-to-b from-[var(--color-accent)]/20 via-[var(--color-border)] to-[var(--color-accent)]/20"
              style={{ top: "1.125rem", bottom: "1.125rem" }}
              aria-hidden
            />
            <div className="relative z-[1] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {dictionary.process.map((item) => (
                <div key={item.step} className="relative space-y-4">
                  <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-accent)_35%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] text-sm font-bold tabular-nums text-[color-mix(in_srgb,var(--color-accent)_90%,white)]">
                    {item.step}
                  </span>
                  <h3 className="text-title text-[var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="fine-print">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <Card variant="dark" className="panel-grid relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-[var(--color-primary)]/16 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
            <CardContent className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="space-y-4">
                <span className="eyebrow border-[color-mix(in_srgb,white_18%,transparent)] bg-[color-mix(in_srgb,white_8%,transparent)] text-[color-mix(in_srgb,white_88%,var(--color-accent))]">
                  {dictionary.home.finalEyebrow}
                </span>
                <h2 className="text-display-sm max-w-xl text-white">{dictionary.home.finalTitle}</h2>
                <p className="text-body max-w-md text-[color-mix(in_srgb,white_72%,transparent)]">
                  {dictionary.home.finalDescription}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:flex-col lg:items-stretch lg:justify-start">
                <Button asChild size="lg" className="w-full sm:w-auto lg:w-full">
                  <Link className="justify-center" href={localizedPath(safeLocale, "/contact")}>
                    {dictionary.home.finalPrimary}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg" className="w-full sm:w-auto lg:w-full">
                  <Link className="justify-center" href={localizedPath(safeLocale, "/services")}>
                    {dictionary.home.finalSecondary}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}

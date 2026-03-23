import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceCard } from "@/components/sections/service-card";
import { getDictionary } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/types/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  return buildMetadata(safeLocale, "services", "/services");
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const dictionary = getDictionary(safeLocale);

  return (
    <>
      <PageHero
        eyebrow={dictionary.servicesPage.eyebrow}
        title={dictionary.servicesPage.title}
        description={dictionary.servicesPage.description}
      >
        <Card variant="dark" className="panel-grid">
          <CardContent className="space-y-4 p-6">
            <span className="inline-flex rounded border border-[color-mix(in_srgb,var(--color-accent)_45%,white_22%)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,white_92%,var(--color-accent))]">
              {dictionary.servicesPage.eyebrow}
            </span>
            <h2 className="text-title text-white">{dictionary.servicesPage.sideTitle}</h2>
            <p className="text-body-sm text-[color-mix(in_srgb,white_72%,transparent)]">
              {dictionary.servicesPage.sideDescription}
            </p>
          </CardContent>
        </Card>
      </PageHero>

      <section className="section-space pt-0">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow={dictionary.servicesPage.eyebrow}
            title={dictionary.servicesPage.catalogTitle}
            description={dictionary.servicesPage.catalogDescription}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {dictionary.services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                partnerLabel={service.partnerLabel}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

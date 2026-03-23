import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageHero } from "@/components/sections/page-hero";
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
  return buildMetadata(safeLocale, "about", "/about");
}

export default async function AboutPage({
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
        eyebrow={dictionary.aboutPage.eyebrow}
        title={dictionary.aboutPage.title}
        description={dictionary.aboutPage.description}
      />

      <section className="section-space pt-0">
        <Container className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <Card variant="muted">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <span className="eyebrow">{dictionary.aboutPage.storyTitle}</span>
              {dictionary.aboutPage.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-[var(--color-muted-foreground)]">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          <Card variant="dark" className="panel-grid">
            <CardContent className="space-y-5 p-7 sm:p-8">
              <span className="inline-flex rounded border border-[color-mix(in_srgb,var(--color-accent)_45%,white_22%)] bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,white_92%,var(--color-accent))]">
                {dictionary.aboutPage.fitTitle}
              </span>
              <ul className="text-body-sm space-y-4 text-[color-mix(in_srgb,white_76%,transparent)]">
                {dictionary.aboutPage.fitItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container className="space-y-10">
          <SectionHeading eyebrow={dictionary.aboutPage.eyebrow} title={dictionary.aboutPage.principlesTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {dictionary.aboutPage.principles.map((item) => (
              <Card key={item.title} variant="default">
                <CardContent className="space-y-3">
                  <h3 className="text-title text-[var(--color-foreground)]">
                    {item.title}
                  </h3>
                  <p className="fine-print">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

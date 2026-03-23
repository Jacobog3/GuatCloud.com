import { CalendarRange, Clock3, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/sections/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { getDictionary } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { isLocale, type Locale } from "@/types/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  return buildMetadata(safeLocale, "contact", "/contact");
}

export default async function ContactPage({
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
        eyebrow={dictionary.contactPage.eyebrow}
        title={dictionary.contactPage.title}
        description={dictionary.contactPage.description}
      />

      <section className="section-space pt-0">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ContactForm locale={safeLocale} />

          <div className="space-y-5">
            <Card variant="muted">
              <CardContent className="space-y-4 p-7">
                <span className="eyebrow">{dictionary.contactPage.detailsTitle}</span>
                <p className="fine-print">{dictionary.contactPage.detailsDescription}</p>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardContent className="space-y-5 p-7">
                <div className="flex items-start gap-3">
                  <div className="icon-tile mt-0.5 size-12 shrink-0">
                    <Mail className="size-[28px]" strokeWidth={2} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-body-sm font-semibold text-[var(--color-foreground)]">
                      {dictionary.contactPage.emailLabel}
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-body-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="icon-tile mt-0.5 size-12 shrink-0">
                    <CalendarRange className="size-[28px]" strokeWidth={2} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-body-sm font-semibold text-[var(--color-foreground)]">
                      {dictionary.contactPage.calendarLabel}
                    </p>
                    <p className="text-body-sm text-[var(--color-muted-foreground)]">
                      {dictionary.contactPage.calendarValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="icon-tile mt-0.5 size-12 shrink-0">
                    <Clock3 className="size-[28px]" strokeWidth={2} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-body-sm font-semibold text-[var(--color-foreground)]">
                      {dictionary.contactPage.availabilityLabel}
                    </p>
                    <p className="text-body-sm text-[var(--color-muted-foreground)]">
                      {dictionary.contactPage.availabilityValue}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

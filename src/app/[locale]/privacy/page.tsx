import { PageHero } from "@/components/sections/page-hero";
import { LegalDocument } from "@/components/legal/legal-document";
import { getLegalDisclaimer, getLegalMeta, getLegalSections, legalContentLastUpdated } from "@/lib/legal";
import { buildLegalMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/content";
import { isLocale, type Locale } from "@/types/locale";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  return buildLegalMetadata(safeLocale, "privacy");
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "es";
  const dictionary = getDictionary(safeLocale);
  const meta = getLegalMeta(safeLocale, "privacy");
  const sections = getLegalSections(safeLocale, "privacy");
  const disclaimer = getLegalDisclaimer(safeLocale);
  const lastLabel = new Date(legalContentLastUpdated).toLocaleDateString(
    safeLocale === "es" ? "es-GT" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <PageHero
        eyebrow={dictionary.legal.privacyEyebrow}
        title={dictionary.legal.privacyTitle}
        description={meta.description}
      />
      <LegalDocument
        disclaimer={disclaimer}
        lastUpdatedLabel={lastLabel}
        lastUpdated={legalContentLastUpdated}
        sections={sections}
      />
    </>
  );
}

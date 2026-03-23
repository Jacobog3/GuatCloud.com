import { Container } from "@/components/shared/container";
import type { LegalSection } from "@/lib/legal";

type LegalDocumentProps = {
  disclaimer: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalDocument({ disclaimer, lastUpdatedLabel, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <section className="section-space-tight pb-16">
      <Container className="max-w-3xl space-y-10">
        <p className="text-body-sm text-[var(--color-muted-foreground)]">
          {disclaimer}{" "}
          <time dateTime={lastUpdated} className="font-medium text-[var(--color-foreground)]">
            {lastUpdatedLabel}
          </time>
          .
        </p>
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="text-title text-[var(--color-foreground)]">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-body text-[var(--color-muted-foreground)]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

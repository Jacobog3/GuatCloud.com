import Link from "next/link";
import { BrandMark } from "@/components/brand/brand-mark";
import { Container } from "@/components/shared/container";
import { getDictionary } from "@/lib/content";
import { localizedPath } from "@/lib/paths";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types/locale";

const navKeys = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" }
] as const;

const legalKeys = [
  { key: "privacy" as const, href: "/privacy" as const },
  { key: "terms" as const, href: "/terms" as const }
];

export function SiteFooter({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] pb-[max(3rem,env(safe-area-inset-bottom,0px))] pt-12">
      <Container className="space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,0.8fr)_minmax(160px,0.45fr)_minmax(220px,0.65fr)] lg:items-start">
          <div className="space-y-4">
            <BrandMark size="md" />
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
              {dictionary.footer.companyLabel}
            </p>
            <nav
              className="flex flex-col gap-2 text-body-sm text-[var(--color-muted-foreground)]"
              aria-label={dictionary.nav.mainNavigation}
            >
              {navKeys.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(locale, item.href)}
                  className="transition hover:text-[var(--color-foreground)]"
                >
                  {dictionary.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
              {dictionary.footer.contactLabel}
            </p>
            <p className="text-body-sm max-w-xs text-[var(--color-muted-foreground)]">
              {dictionary.footer.basedIn}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-body-sm font-medium text-[var(--color-foreground)] transition hover:text-[var(--color-primary-strong)]"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--color-border)]/70 pt-6 text-body-sm text-[var(--color-muted-foreground)]">
          <span>© {new Date().getFullYear()} {siteConfig.brandDisplay}</span>
          {legalKeys.map((item) => (
            <div key={item.href} className="inline-flex items-center gap-3">
              <span aria-hidden className="text-[var(--color-border-strong)]">
                /
              </span>
              <Link
                href={localizedPath(locale, item.href)}
                className="hover:text-[var(--color-foreground)]"
              >
                {dictionary.nav[item.key]}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div className="max-w-2xl space-y-4">
            <BrandMark size="lg" />
            <p className="text-body max-w-xl text-[var(--color-muted-foreground)]">
              {dictionary.footer.description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
                {dictionary.footer.coverageLabel}
              </p>
              <p className="text-body-sm max-w-xs text-[var(--color-muted-foreground)]">
                {dictionary.footer.basedIn}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted-foreground)]">
                {dictionary.footer.contactLabel}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-body-sm font-medium text-[var(--color-foreground)] transition hover:text-[var(--color-primary-strong)]"
              >
                {siteConfig.email}
              </a>
              <p className="text-body-sm text-[var(--color-muted-foreground)]">
                {dictionary.footer.responseTime}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-[var(--color-border)]/70 pt-6 md:flex-row md:items-center md:justify-between">
          <nav
            className="text-body-sm flex flex-wrap gap-x-4 gap-y-2 text-[var(--color-muted-foreground)]"
            aria-label={dictionary.nav.mainNavigation}
          >
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="hover:text-[var(--color-foreground)]"
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}
            {legalKeys.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="hover:text-[var(--color-foreground)]"
              >
                {dictionary.nav[item.key]}
              </Link>
            ))}
          </nav>
          <p className="text-body-sm shrink-0 text-[var(--color-muted-foreground)]">
            © {new Date().getFullYear()} {siteConfig.brandDisplay}
          </p>
        </div>
      </Container>
    </footer>
  );
}

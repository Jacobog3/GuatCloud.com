"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/brand-mark";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/content";
import { localizedPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

const navKeys = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" }
] as const;

const linkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dictionary = getDictionary(locale);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_94%,var(--color-surface)_6%)]/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-6">
        <Link
          href={localizedPath(locale, "/")}
          aria-label="GuatCloud home"
          className={cn("shrink-0 rounded-md", linkFocus)}
        >
          <BrandMark size="md" decorative />
        </Link>

        <nav
          className="hidden h-[4.25rem] items-stretch gap-0 lg:flex"
          aria-label={dictionary.nav.mainNavigation}
        >
          {navKeys.map((item) => {
            const href = localizedPath(locale, item.href);
            const active = pathname === href;

            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "group relative inline-flex h-full items-center px-4 text-sm font-medium transition-colors",
                  linkFocus,
                  active
                    ? "text-[var(--color-foreground)]"
                    : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                )}
              >
                {dictionary.nav[item.key]}
                <span
                  className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-colors",
                    active ? "bg-[var(--color-primary)]" : "bg-transparent group-hover:bg-[var(--color-border)]"
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button asChild size="sm">
            <Link href={localizedPath(locale, "/contact")} className={linkFocus}>
              {dictionary.nav.consultation}
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] lg:hidden",
            linkFocus
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-[18px] w-[18px]" aria-hidden /> : <Menu className="h-[18px] w-[18px]" aria-hidden />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-background)] lg:hidden"
        >
          <Container className="flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-4 overflow-y-auto py-5">
            <nav className="flex flex-col gap-1" aria-label={dictionary.nav.mainNavigation}>
              {navKeys.map((item) => {
                const href = localizedPath(locale, item.href);
                const active = pathname === href;

                return (
                  <Link
                    key={item.href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition",
                      linkFocus,
                      active
                        ? "bg-[var(--color-surface)] text-[var(--color-foreground)] ring-1 ring-[var(--color-border)]"
                        : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)]"
                    )}
                  >
                    {dictionary.nav[item.key]}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
              <LanguageSwitcher locale={locale} />
              <Button asChild size="sm">
                <Link href={localizedPath(locale, "/contact")} onClick={() => setOpen(false)} className={linkFocus}>
                  {dictionary.nav.consultation}
                </Link>
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

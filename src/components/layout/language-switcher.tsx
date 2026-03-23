"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/locale";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const label = getDictionary(locale).nav.switchLanguage;
  const alternateLocale = locale === "es" ? "en" : "es";
  const nextPath = pathname.replace(`/${locale}`, `/${alternateLocale}`);

  return (
    <div
      className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_92%,black_8%)] p-1 shadow-sm"
      aria-label={label}
    >
      {(["es", "en"] as const).map((entry) => (
        <Link
          key={entry}
          href={entry === locale ? pathname : pathname.replace(`/${locale}`, `/${entry}`)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition",
            locale === entry
              ? "bg-[var(--color-primary)] text-[var(--color-panel)]"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          )}
          aria-label={entry === locale ? label : nextPath}
        >
          {entry}
        </Link>
      ))}
    </div>
  );
}

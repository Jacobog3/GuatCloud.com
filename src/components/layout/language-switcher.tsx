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
      className="inline-flex h-10 items-center rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_94%,black_6%)] p-1"
      aria-label={label}
    >
      {(["es", "en"] as const).map((entry) => (
        <Link
          key={entry}
          href={entry === locale ? pathname : pathname.replace(`/${locale}`, `/${entry}`)}
          className={cn(
            "inline-flex h-8 items-center rounded-lg px-3 text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition",
            locale === entry
              ? "bg-[color-mix(in_srgb,var(--color-primary)_16%,var(--color-surface))] text-[var(--color-foreground)]"
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

import type { Locale } from "@/types/locale";

/** Localized app routes (without locale prefix in the path segment list). */
export type AppPath = "/" | "/services" | "/about" | "/contact" | "/privacy" | "/terms";

export function localizedPath(locale: Locale, path: AppPath) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

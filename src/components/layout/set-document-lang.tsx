"use client";

import { useEffect } from "react";
import type { Locale } from "@/types/locale";

/**
 * Syncs <html lang> with the active locale (root layout cannot read [locale]).
 */
export function SetDocumentLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

import type { Metadata } from "next";
import { getDictionary } from "@/lib/content";
import { getLegalMeta, type LegalPageId } from "@/lib/legal";
import { localizedPath, type AppPath } from "@/lib/paths";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/types/locale";

type ContentPage = "home" | "services" | "about" | "contact";

function alternates(locale: Locale, path: AppPath) {
  return {
    canonical: localizedPath(locale, path),
    languages: {
      es: localizedPath("es", path),
      en: localizedPath("en", path)
    }
  };
}

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata(
  locale: Locale,
  page: ContentPage,
  path: Extract<AppPath, "/" | "/services" | "/about" | "/contact">
): Metadata {
  const dictionary = getDictionary(locale);
  const data = dictionary.meta[page];

  return {
    title: data.title,
    description: data.description,
    alternates: alternates(locale, path),
    robots: { index: true, follow: true },
    openGraph: {
      title: data.title,
      description: data.description,
      url: absoluteUrl(localizedPath(locale, path)),
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [`${siteConfig.url}/og-image.svg`]
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${siteConfig.url}/og-image.svg`]
    }
  };
}

export function buildLegalMetadata(locale: Locale, id: LegalPageId): Metadata {
  const path: AppPath = id === "privacy" ? "/privacy" : "/terms";
  const data = getLegalMeta(locale, id);

  return {
    title: data.title,
    description: data.description,
    alternates: alternates(locale, path),
    robots: { index: true, follow: true },
    openGraph: {
      title: data.title,
      description: data.description,
      url: absoluteUrl(localizedPath(locale, path)),
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [`${siteConfig.url}/og-image.svg`]
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${siteConfig.url}/og-image.svg`]
    }
  };
}

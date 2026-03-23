import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { localizedPath, type AppPath } from "@/lib/paths";
import { locales } from "@/types/locale";

const pages: AppPath[] = ["/", "/services", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${localizedPath(locale, path)}`,
      lastModified: new Date()
    }))
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Cloud platform engineering & DevOps`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "cloud platform engineering",
    "DevOps consulting",
    "MLOps infrastructure",
    "AWS consulting",
    "multi-cloud",
    "platform engineering",
    "network engineering",
    "Terraform",
    "CI/CD",
    "cloud consulting Guatemala"
  ],
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    images: [`${siteConfig.url}/og-image.svg`]
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteConfig.url}/og-image.svg`]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c1117" },
    { media: "(prefers-color-scheme: light)", color: "#0c1117" }
  ]
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      url: siteConfig.url,
      email: siteConfig.email,
      founder: { "@type": "Person", name: siteConfig.founder },
      description: siteConfig.description,
      address: { "@type": "PostalAddress", addressCountry: "GT" }
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: ["es-GT", "en"],
      publisher: { "@id": `${siteConfig.url}/#organization` }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}

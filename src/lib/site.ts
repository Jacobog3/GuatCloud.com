export const siteConfig = {
  /** Marketing / schema name (sentence case). */
  name: "GuatCloud",
  /** Shown in footer copyright and other brand lockups. */
  brandDisplay: "GUATCLOUD",
  legalName: "GuatCloud",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://guatcloud.com",
  email: "hello@guatcloud.com",
  founder: "Jacobo Gonzalez",
  location: "Guatemala",
  description:
    "DevOps, MLOps, and platform engineering for public cloud teams. Cloud-agnostic patterns where it helps; deepest implementation experience on AWS (Terraform, CI/CD, networking, foundations)."
} as const;

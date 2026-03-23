import { cn } from "@/lib/utils";

/**
 * Service card icons only (not the brand logo). Drawn for a 24×24 viewBox,
 * displayed larger in tiles for better balance on cards.
 */
type ServiceGlyphProps = {
  slug?: string;
  className?: string;
};

const sw = 2;

export function ServiceGlyph({ slug, className }: ServiceGlyphProps) {
  const base = cn("size-[28px] shrink-0", className);

  switch (slug) {
    case "aws-consulting":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <path
            d="M7.5 17.5h10a3.5 3.5 0 0 0 .2-7 4.5 4.5 0 0 0-8.7-1.4 3 3 0 0 0-1.5-.6 3 3 0 0 0-3 3c0 1.7 1.3 3 3 3Z"
            fill="currentColor"
            fillOpacity={0.12}
          />
          <path
            d="M7.5 17.5h10a3.5 3.5 0 0 0 .2-7 4.5 4.5 0 0 0-8.7-1.4 3 3 0 0 0-1.5-.6 3 3 0 0 0-3 3c0 1.7 1.3 3 3 3Z"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "devops-platform-engineering":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <rect x="2.5" y="3.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth={sw} />
          <rect x="13.5" y="3.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth={sw} strokeOpacity={0.35} />
          <rect x="8" y="12.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth={sw} />
          <path
            d="M6.5 11.5h11M12 11.5V12.6"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeOpacity={0.45}
          />
        </svg>
      );

    case "infrastructure-as-code":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <path
            d="M9.25 7.25 5.5 12l3.75 4.75M14.75 7.25 18.5 12l-3.75 4.75"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "cicd-automation":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <path
            d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "cloud-security-foundations":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <path
            d="M12 4.25 16.75 6.5c.85.4 1.25 1 1.25 1.75v4.5c0 2.6-2 4.6-5.25 5.85a.6.6 0 0 1-.5 0C9 17.35 7 15.35 7 12.75V8.25c0-.75.4-1.35 1.25-1.75L12 4.25Z"
            fill="currentColor"
            fillOpacity={0.1}
          />
          <path
            d="M12 4.25 16.75 6.5c.85.4 1.25 1 1.25 1.75v4.5c0 2.6-2 4.6-5.25 5.85a.6.6 0 0 1-.5 0C9 17.35 7 15.35 7 12.75V8.25c0-.75.4-1.35 1.25-1.75L12 4.25Z"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="m9.25 12 1.75 1.75 3.75-3.75"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "cost-optimization":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth={sw} strokeOpacity={0.28} />
          <path
            d="M12 7v5l3.5 2"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 8 7 6.5"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeOpacity={0.55}
          />
        </svg>
      );

    case "cloud-modernization":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <path
            d="M8 16.5h8.5a3 3 0 0 0 .1-6 4 4 0 0 0-7.7-1.2 2.5 2.5 0 0 0-1.9-.8 2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5Z"
            fill="currentColor"
            fillOpacity={0.1}
          />
          <path
            d="M8 16.5h8.5a3 3 0 0 0 .1-6 4 4 0 0 0-7.7-1.2 2.5 2.5 0 0 0-1.9-.8 2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5Z"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14V9.5M9.5 11.25L12 8.75l2.5 2.5"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "ai-ready-infrastructure":
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth={sw} />
          <path
            d="M12 6.25v2.25M12 15.5v2.25M17.35 8.9l-1.5 1.5M8.15 13.6l-1.5 1.5M17.35 15.1l-1.5-1.5M8.15 10.4l-1.5-1.5M18.75 12h-2.25M7.5 12H5.25"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeOpacity={0.42}
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden fill="none" className={base}>
          <rect
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="2.5"
            stroke="currentColor"
            strokeWidth={sw}
            strokeOpacity={0.35}
          />
          <path
            d="M9.5 12h5M12 9.5v5"
            stroke="currentColor"
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

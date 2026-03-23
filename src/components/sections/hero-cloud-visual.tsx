import { cn } from "@/lib/utils";

type HeroCloudVisualProps = {
  className?: string;
  /** Unique prefix for SVG defs when multiple instances exist on one page. */
  idPrefix?: string;
};

const contours = [
  { rx: 130, ry: 78, opacity: 0.04 },
  { rx: 110, ry: 66, opacity: 0.05 },
  { rx: 90, ry: 54, opacity: 0.06 },
  { rx: 72, ry: 43, opacity: 0.07 },
  { rx: 56, ry: 34, opacity: 0.08 },
  { rx: 42, ry: 25, opacity: 0.09 },
  { rx: 30, ry: 18, opacity: 0.1 },
  { rx: 18, ry: 11, opacity: 0.12 },
];

/**
 * Topographic contour-line pattern for hero panels (subtle geographic texture).
 */
export function HeroCloudVisual({ className, idPrefix = "hcv" }: HeroCloudVisualProps) {
  const g = `${idPrefix}-grad`;

  return (
    <svg
      className={cn("max-h-[200px] w-full sm:max-h-none", className)}
      viewBox="0 0 420 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={g} x1="200" y1="40" x2="340" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-primary)" stopOpacity="0.14" />
          <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <rect x="24" y="28" width="372" height="184" rx="14" fill={`url(#${g})`} opacity="0.6" />

      {contours.map((c, i) => (
        <ellipse
          key={i}
          cx="280"
          cy="130"
          rx={c.rx}
          ry={c.ry}
          transform="rotate(-12 280 130)"
          stroke="var(--color-primary)"
          strokeOpacity={c.opacity}
          strokeWidth="1"
          fill="none"
        />
      ))}

      <circle cx="280" cy="130" r="3" fill="var(--color-primary)" fillOpacity="0.2" />
    </svg>
  );
}

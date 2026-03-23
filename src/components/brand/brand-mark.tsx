import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Scales the full official mark (width; height follows 4:1 aspect). */
  size?: "sm" | "md" | "lg";
  /**
   * When true, the mark is ignored by assistive tech (use inside a link that
   * already has an accessible name).
   */
  decorative?: boolean;
};

const widthClass = {
  sm: "w-[min(100%,200px)]",
  md: "w-[min(100%,240px)]",
  lg: "w-[min(100%,288px)]"
} as const;

/**
 * Official GUATCLOUD wordmark SVG. Do not alter paths, strokes, or colors.
 */
export function BrandMark({
  className,
  size = "md",
  decorative = false
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-auto shrink-0 text-[var(--color-foreground)]",
        widthClass[size],
        className
      )}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "GUATCLOUD"}
    >
      {!decorative ? <title>GUATCLOUD</title> : null}
      <g transform="translate(15, 20)">
        <path
          d="M15,30 A15,15 0 0,1 45,30 A10,10 0 0,1 65,30 A15,15 0 0,1 65,55 L15,55 Z"
          fill="none"
          stroke="#FF9900"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="40" r="4" fill="#FF9900" />
        <circle cx="45" cy="25" r="4" fill="#FF9900" />
        <circle cx="55" cy="45" r="4" fill="#FF9900" />
        <line x1="25" y1="40" x2="45" y2="25" stroke="#FF9900" strokeWidth={2} />
        <line x1="45" y1="25" x2="55" y2="45" stroke="#FF9900" strokeWidth={2} />
      </g>
      <text
        x="95"
        y="58"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="currentColor"
        letterSpacing="-1"
      >
        GUAT<tspan fill="#FF9900">CLOUD</tspan>
      </text>
      <text
        x="98"
        y="78"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        fontSize="11"
        fill="#6b7280"
        letterSpacing="3.5"
      >
        CLOUD CONSULTING & DEVOPS
      </text>
    </svg>
  );
}

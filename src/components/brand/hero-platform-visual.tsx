import { cn } from "@/lib/utils";

export type HeroDiagramLabels = {
  band: string;
  col1Title: string;
  col1Sub: string;
  col2Title: string;
  col2Sub: string;
  col3Title: string;
  col3Sub: string;
};

type HeroPlatformVisualProps = {
  className?: string;
  labels: HeroDiagramLabels;
};

/**
 * Abstract topology motif (no vendor logos). Suggests console-style capability
 * columns aligned with DevOps, MLOps, and networking.
 */
export function HeroPlatformVisual({ className, labels }: HeroPlatformVisualProps) {
  return (
    <div
      className={cn(
        "cloud-diagram-panel relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-none sm:p-8",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px"
        }}
        aria-hidden
      />
      <svg
        viewBox="0 0 360 240"
        className="relative z-[1] mx-auto h-auto w-full max-w-[400px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="24"
          y="28"
          width="312"
          height="44"
          rx="6"
          stroke="var(--color-accent)"
          strokeOpacity={0.45}
          strokeWidth="1.25"
        />
        <text
          x="180"
          y="54"
          textAnchor="middle"
          fill="var(--color-muted-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.12em"
        >
          {labels.band}
        </text>

        <rect
          x="32"
          y="96"
          width="92"
          height="72"
          rx="8"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          fill="color-mix(in srgb, var(--color-primary) 6%, transparent)"
        />
        <text
          x="78"
          y="128"
          textAnchor="middle"
          fill="var(--color-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {labels.col1Title}
        </text>
        <text
          x="78"
          y="148"
          textAnchor="middle"
          fill="var(--color-muted-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
        >
          {labels.col1Sub}
        </text>

        <rect
          x="134"
          y="96"
          width="92"
          height="72"
          rx="8"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          fill="color-mix(in srgb, var(--color-accent) 7%, transparent)"
        />
        <text
          x="180"
          y="128"
          textAnchor="middle"
          fill="var(--color-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {labels.col2Title}
        </text>
        <text
          x="180"
          y="148"
          textAnchor="middle"
          fill="var(--color-muted-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
        >
          {labels.col2Sub}
        </text>

        <rect
          x="236"
          y="96"
          width="92"
          height="72"
          rx="8"
          stroke="var(--color-network)"
          strokeWidth="1.5"
          fill="color-mix(in srgb, var(--color-network) 8%, transparent)"
        />
        <text
          x="282"
          y="128"
          textAnchor="middle"
          fill="var(--color-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.08em"
        >
          {labels.col3Title}
        </text>
        <text
          x="282"
          y="148"
          textAnchor="middle"
          fill="var(--color-muted-foreground)"
          fontFamily="system-ui, sans-serif"
          fontSize="8"
          fontWeight="500"
        >
          {labels.col3Sub}
        </text>

        <path
          d="M78 88V80h204v8"
          stroke="var(--color-border)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M78 168v16h204v-16"
          stroke="var(--color-border)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <circle cx="78" cy="196" r="3" fill="var(--color-primary)" fillOpacity={0.85} />
        <circle cx="180" cy="196" r="3" fill="var(--color-accent)" fillOpacity={0.85} />
        <circle cx="282" cy="196" r="3" fill="var(--color-network)" fillOpacity={0.85} />
        <path
          d="M78 196h204"
          stroke="var(--color-border)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>
    </div>
  );
}

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const showEyebrow = Boolean(eyebrow?.trim());

  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {showEyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="space-y-3.5">
        <h2
          className={cn(
            "text-display-sm max-w-3xl font-semibold tracking-tight text-[var(--color-foreground)]",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "text-body max-w-2xl text-[var(--color-muted-foreground)]",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

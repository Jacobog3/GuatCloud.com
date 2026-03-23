import { Container } from "@/components/shared/container";

export default function LocaleNotFound() {
  return (
    <section className="section-space">
      <Container className="flex min-h-[60vh] items-center justify-center">
        <div className="max-w-xl space-y-5 text-center">
          <span className="eyebrow">404</span>
          <h1 className="text-4xl text-[var(--color-foreground)] sm:text-5xl">Page not found</h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            The page you are looking for does not exist.
          </p>
        </div>
      </Container>
    </section>
  );
}

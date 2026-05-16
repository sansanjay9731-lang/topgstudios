import { Button, Container, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-[70vh] flex items-center">
      <Container className="text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          ERR · 404 · ROUTE_NOT_FOUND
        </span>
        <h1 className="mt-6 font-[var(--font-display)] text-6xl sm:text-8xl font-medium tracking-tight">
          404
        </h1>
        <p className="mt-4 text-[var(--color-fg-muted)]">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </Section>
  );
}

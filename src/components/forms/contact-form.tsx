"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createContactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { getDictionary } from "@/lib/content";
import { localizedPath } from "@/lib/paths";
import type { Locale } from "@/types/locale";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).form;
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = useMemo(() => createContactFormSchema(copy.acceptPrivacyError), [copy.acceptPrivacyError]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
      website: "",
      acceptPrivacy: false
    }
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setServerMessage(null);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setServerMessage(copy.success);
      setIsSuccess(true);
      form.reset({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        website: "",
        acceptPrivacy: false
      });
    } catch {
      setServerMessage(copy.error);
      setIsSuccess(false);
    }
  });

  return (
    <Card variant="default">
      <CardContent className="space-y-5 p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">{copy.name}</Label>
              <Input id="name" placeholder={copy.placeholders.name} {...form.register("name")} />
              <p className="text-body-sm text-[var(--color-destructive)]">{form.formState.errors.name?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{copy.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={copy.placeholders.email}
                {...form.register("email")}
              />
              <p className="text-body-sm text-[var(--color-destructive)]">{form.formState.errors.email?.message}</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">{copy.company}</Label>
              <Input
                id="company"
                placeholder={copy.placeholders.company}
                {...form.register("company")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">{copy.service}</Label>
              <Input
                id="service"
                placeholder={copy.placeholders.service}
                {...form.register("service")}
              />
              <p className="text-body-sm text-[var(--color-destructive)]">{form.formState.errors.service?.message}</p>
            </div>
          </div>

          <div className="hidden">
            <Label htmlFor="website">Website</Label>
            <Input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{copy.message}</Label>
            <Textarea
              id="message"
              placeholder={copy.placeholders.message}
              {...form.register("message")}
            />
            <p className="text-body-sm text-[var(--color-destructive)]">{form.formState.errors.message?.message}</p>
          </div>

          <div className="space-y-2">
            <div className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface-soft)_80%,black_20%)] p-4">
              <input
                id="acceptPrivacy"
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-accent)]/40"
                checked={form.watch("acceptPrivacy")}
                onChange={(e) =>
                  form.setValue("acceptPrivacy", e.target.checked, {
                    shouldDirty: true,
                    shouldValidate: true
                  })
                }
              />
              <label htmlFor="acceptPrivacy" className="text-body-sm cursor-pointer text-[var(--color-muted-foreground)]">
                {copy.acceptPrivacyBefore}{" "}
                <Link
                  href={localizedPath(locale, "/privacy")}
                  className="font-medium text-[var(--color-primary-strong)] underline decoration-[var(--color-primary)]/40 underline-offset-2 hover:decoration-[var(--color-primary)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.privacyPolicyName}
                </Link>{" "}
                {copy.acceptPrivacyAfter}
              </label>
            </div>
            <p className="text-body-sm text-[var(--color-destructive)]">
              {form.formState.errors.acceptPrivacy?.message}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={`text-body-sm ${isSuccess ? "text-[var(--color-success)]" : "text-[var(--color-muted-foreground)]"}`}
              role="status"
            >
              {serverMessage}
            </p>
            <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "..." : copy.submit}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

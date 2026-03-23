import { z } from "zod";

const contactFields = {
  name: z.string().min(2).max(80),
  email: z.string().email(),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(2).max(120),
  message: z.string().min(20).max(2000),
  website: z.string().max(0).optional().or(z.literal(""))
};

export function createContactFormSchema(acceptPrivacyMessage: string) {
  return z.object({
    ...contactFields,
    acceptPrivacy: z.boolean().refine((v) => v === true, { message: acceptPrivacyMessage })
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>;

/** Server-side validation: honeypot + explicit consent. */
export const contactApiSchema = z.object({
  ...contactFields,
  acceptPrivacy: z.literal(true)
});

export type ContactApiPayload = z.infer<typeof contactApiSchema>;

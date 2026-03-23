import { NextResponse } from "next/server";
import { contactApiSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactApiSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (result.data.website) {
      return NextResponse.json({ ok: true });
    }

    console.info("[GuatCloud contact]", {
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      service: result.data.service,
      message: result.data.message,
      acceptPrivacy: result.data.acceptPrivacy
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request" }, { status: 500 });
  }
}

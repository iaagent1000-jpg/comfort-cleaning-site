import { NextResponse } from "next/server";
import { activeServices } from "@/data/services";
import { validateAssessment, type AssessmentPayload } from "@/lib/assessment";
import { forwardAssessment, SubmissionConfigurationError } from "@/lib/submission";

export async function POST(request: Request) {
  try {
    const input: unknown = await request.json();
    const validation = validateAssessment(input);
    if (!validation.valid) return NextResponse.json({ error: "Please check your details.", details: validation.errors }, { status: 400 });

    const knownIds = new Set(activeServices.map((service) => service.id));
    if (validation.data.selectedServices.some((id) => !knownIds.has(id))) {
      return NextResponse.json({ error: "One or more selected services are invalid." }, { status: 400 });
    }

    const payload: AssessmentPayload = {
      ...validation.data,
      requestId: `CC-${crypto.randomUUID().split("-")[0].toUpperCase()}`,
      createdAt: new Date().toISOString(),
      source: "website",
    };
    const result = await forwardAssessment(payload);
    return NextResponse.json({ ok: true, requestId: payload.requestId, deliveryMode: result.mode });
  } catch (error) {
    if (error instanceof SubmissionConfigurationError) {
      return NextResponse.json({ error: "Online requests are not configured yet. Please call or email Comfort Cleaning." }, { status: 503 });
    }
    console.error("Assessment submission failed", error);
    return NextResponse.json({ error: "We could not send your request. Please try again or contact us directly." }, { status: 502 });
  }
}

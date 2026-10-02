import type { AssessmentPayload } from "@/lib/assessment";

export class SubmissionConfigurationError extends Error {}

export async function forwardAssessment(payload: AssessmentPayload) {
  const endpoint = process.env.ASSESSMENT_WEBHOOK_URL;
  const devMode = process.env.ASSESSMENT_DEV_MODE === "true" && process.env.NODE_ENV !== "production";

  if (!endpoint) {
    if (devMode) return { delivered: false, mode: "development" as const };
    throw new SubmissionConfigurationError("Assessment submissions are not configured yet.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ASSESSMENT_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.ASSESSMENT_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Submission endpoint returned ${response.status}.`);
    return { delivered: true, mode: "webhook" as const };
  } finally {
    clearTimeout(timeout);
  }
}

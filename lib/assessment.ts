export type PhotoMetadata = { name: string; size: number; type: string };

export type AssessmentRequest = {
  customerType: "new" | "existing";
  name: string;
  phone: string;
  email: string;
  address: string;
  eircode: string;
  selectedServices: string[];
  notes: string;
  preferredAssessmentDate: string;
  preferredAssessmentWindow: string;
  photos: PhotoMetadata[];
  consent: boolean;
};

export type AssessmentPayload = AssessmentRequest & {
  requestId: string;
  createdAt: string;
  source: "website";
};

export function validateAssessment(input: unknown): { valid: true; data: AssessmentRequest } | { valid: false; errors: string[] } {
  if (!input || typeof input !== "object") return { valid: false, errors: ["Request body is required."] };
  const data = input as Partial<AssessmentRequest>;
  const errors: string[] = [];
  const required: (keyof AssessmentRequest)[] = ["name", "phone", "email", "address", "eircode", "preferredAssessmentDate", "preferredAssessmentWindow"];
  required.forEach((key) => {
    if (typeof data[key] !== "string" || !(data[key] as string).trim()) errors.push(`${key} is required.`);
  });
  if (!Array.isArray(data.selectedServices) || data.selectedServices.length === 0) errors.push("Select at least one service.");
  if (typeof data.email === "string" && !/^\S+@\S+\.\S+$/.test(data.email)) errors.push("Enter a valid email address.");
  if (data.consent !== true) errors.push("Consent is required.");
  if (data.customerType !== "new" && data.customerType !== "existing") errors.push("Customer type is invalid.");
  if (errors.length) return { valid: false, errors };
  return { valid: true, data: data as AssessmentRequest };
}

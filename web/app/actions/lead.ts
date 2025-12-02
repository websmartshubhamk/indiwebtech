"use server";

type LeadState = {
  ok: boolean;
  message: string;
};

export async function submitLead(_: LeadState | undefined, formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const project = String(formData.get("project") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();

  if (!name || !email) {
    return {
      ok: false,
      message: "Name and email are required.",
    };
  }

  console.info("[lead]", { name, email, company, project, budget });

  return {
    ok: true,
    message: "Thanks! We’ll reply within one business day.",
  };
}

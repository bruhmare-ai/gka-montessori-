import { NextResponse } from "next/server";

const REQUIRED = ["parentName", "phone"] as const;

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid JSON" }, { status: 400 });
  }

  for (const field of REQUIRED) {
    if (typeof data[field] !== "string" || !(data[field] as string).trim()) {
      return NextResponse.json({ ok: false, error: `missing ${field}` }, { status: 400 });
    }
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    source: "website-form",
    ...data,
  };

  console.log("[lead]", JSON.stringify(lead));

  // Speed-to-lead handoff (funnels/speed-to-lead/spec.md) — full automation lands later
  const webhook = process.env.SPEED_TO_LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[lead] webhook forward failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}

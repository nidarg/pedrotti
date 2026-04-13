import { NextRequest, NextResponse } from "next/server";

type WhatsAppWebhookChangeValue = {
  messaging_product?: string;
  metadata?: {
    display_phone_number?: string;
    phone_number_id?: string;
  };
  contacts?: Array<{
    profile?: {
      name?: string;
    };
    wa_id?: string;
  }>;
  messages?: Array<{
    from?: string;
    id?: string;
    timestamp?: string;
    type?: string;
    text?: {
      body?: string;
    };
  }>;
};

type WhatsAppWebhookBody = {
  object?: string;
  entry?: Array<{
    id?: string;
    changes?: Array<{
      field?: string;
      value?: WhatsAppWebhookChangeValue;
    }>;
  }>;
};

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json(
    { error: "Verification failed" },
    { status: 403 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as WhatsAppWebhookBody;

    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ received: true });
    }

    for (const entry of body.entry ?? []) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "messages") continue;

        const value = change.value;
        const contact = value?.contacts?.[0];
        const incomingMessage = value?.messages?.[0];

        if (!incomingMessage) continue;

        const customerPhone = contact?.wa_id ?? incomingMessage.from ?? "";
        const customerName = contact?.profile?.name ?? "Unknown";
        const messageText = incomingMessage.text?.body ?? "";
        const messageType = incomingMessage.type ?? "unknown";
        const messageId = incomingMessage.id ?? "";

        console.log("=== WhatsApp inbound message ===");
        console.log({
          customerPhone,
          customerName,
          messageId,
          messageType,
          messageText,
        });

        // AICI vom pune la pasul următor:
        // 1) save in DB
        // 2) detect language
        // 3) translate to Italian for operator
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("WhatsApp webhook error:", error);

    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
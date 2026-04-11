import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      
      message,
      vehicleType,
      canMove,
      needsTowing,
      needsHeavyRecovery,
    } = body;

    const prompt = `
You are an emergency roadside dispatch assistant for an Italian towing company.

The customer may write in ANY language.
Automatically detect the customer's language from the message.

Create a SHORT operational dispatch summary in Italian for the towing operator.

Include:
- detected customer language
- vehicle type
- problem description
- whether the vehicle can move
- whether towing is needed
- whether heavy recovery is needed

Rules:
- output only the Italian summary
- maximum 400 characters
- clear, practical, dispatch-ready
- no markdown
- no bullet points

Customer message: ${message}
Vehicle type: ${vehicleType}
Can move: ${canMove}
Needs towing: ${needsTowing}
Needs heavy recovery: ${needsHeavyRecovery}
`;

    const completion = await client.responses.create({
      model: "gpt-5.4-mini",
      input: prompt,
    });

    const summary = completion.output_text.trim();

    return NextResponse.json({ summary });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}
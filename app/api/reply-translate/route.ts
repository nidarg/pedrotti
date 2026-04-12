import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { targetLanguage, message } = await req.json();

    const prompt = `
You are a professional emergency roadside assistance translator.

Translate the Italian operator reply into ${targetLanguage}.

Rules:
- keep the tone calm and operational
- preserve ETA, locations, safety instructions
- no markdown
- output only the translated message

Italian message: ${message}
`;

    const completion = await client.responses.create({
      model: "gpt-5.4-mini",
      input: prompt,
    });

    return NextResponse.json({
      translated: completion.output_text.trim(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Translation failed" },
      { status: 500 }
    );
  }
}
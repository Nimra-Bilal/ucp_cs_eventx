import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful website assistant." },
        { role: "user", content: message },
      ],
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    return Response.json(
      { reply: "Error connecting to AI." },
      { status: 500 }
    );
  }
}
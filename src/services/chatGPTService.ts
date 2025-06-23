import { OpenAI } from "openai";
import { OPENAI_API_KEY } from "../config";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

export async function getReview(prompt: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: prompt }
    ]
  });
  return res.choices[0].message?.content || "";
}

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config"; // add GEMINI_API_KEY in your .env

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function getReview(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}

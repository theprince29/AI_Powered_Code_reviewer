import { Request, Response, NextFunction } from "express";
import ReviewSession from "../models/reviewSession";
import { buildPrompt } from "../services/promptService";
import { getReview } from "../services/chatGPTService";
import { parseResponse } from "../services/parseService";

export async function reviewCode(
  req: Request,
  res: Response,
  next: NextFunction  
) {
  try {
    const { code, instructions } = req.body;
    if (!code) return res.status(400).json({ error: "Code is required" });

    const prompt = buildPrompt(code, instructions);
    const gptResponse = await getReview(prompt);
    const parsed = parseResponse(gptResponse);

    const session = new ReviewSession({
      code,
      prompt,
      response: parsed
    });

    await session.save();
    res.json(parsed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
import dotenv from 'dotenv';
dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;
export const MONGO_URI = process.env.MONGO_URI as string;
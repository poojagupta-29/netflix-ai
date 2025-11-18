// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
console.log("Gemini API Key:", process.env.REACT_APP_GEMINI_KEY);


export async function askGemini(prompt) {

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const result = await model.generateContent(prompt);

    return result.response.text();
}

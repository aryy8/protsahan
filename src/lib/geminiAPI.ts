import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "no",
});

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userMessage,
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error fetching response. Please try again.";
  }
}

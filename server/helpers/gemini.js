require("dotenv").config()
const {GoogleGenAI } =require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_SECRET });

async function gemini(prompt) {
    console.log("running gemini")
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Gemini roleplay:
Cari tau rumah yang bagus, rekomendasi menyewa atau menyewakan, rekomendasi daerah.
Jangan terlalu panjang.
Prompts: ${prompt}`,
    });
    return response.text
}

module.exports= gemini

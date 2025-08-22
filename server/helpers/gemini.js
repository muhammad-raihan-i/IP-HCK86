require("dotenv").config()
const GoogleGenAI=require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function gemini2(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
}

async function recommend(data){//temporary
    await gemini2(`suggest as json from ${data}`)
}

module.exports = gemini2;
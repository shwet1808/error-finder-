const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

// Validate API key
const apiKey = process.env.GOOGLE_GEMINI_KEY;
if (!apiKey) {
    console.error("❌ Google Gemini API key is missing! Set GOOGLE_GEMINI_KEY in .env file.");
    process.exit(1);
}

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(apiKey.trim());
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
        You are a code reviewer with expertise in development.
        You analyze code, find problems, and suggest solutions to the developer.
    `
});

async function generateContent(prompt) {
    try {
        if (!prompt) {
            throw new Error("Prompt is required");
        }

        const result = await model.generateContent(prompt);
        const response = await result.response.text(); 

        return response;
    } catch (error) {
        console.error("Error in generateContent:", error.message);
        throw new Error("AI service failed to generate a response");
    }
}

module.exports = generateContent;

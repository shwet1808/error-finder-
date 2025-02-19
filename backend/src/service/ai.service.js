const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure dotenv is loaded
require('dotenv').config();

// Validate API key
const apiKey = process.env.GOOGLE_GEMINI_KEY;
if (!apiKey) {
    console.error("❌ Google Gemini API key is missing! Set GOOGLE_GEMINI_KEY in .env file.");
    process.exit(1); // Exit process if API key is missing
}

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(apiKey.trim());
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function generateContent(prompt) {
    try {
        if (!prompt) {
            throw new Error("Prompt is required");
        }

        const result = await model.generateContent(prompt);
        if (!result || !result.response || !result.response.text) {
            throw new Error("Invalid response from AI model");
        }

        return result.response.text();
    } catch (error) {
        console.error("Error in generateContent:", error.message);
        throw new Error("AI service failed to generate a response");
    }
}

module.exports = generateContent;

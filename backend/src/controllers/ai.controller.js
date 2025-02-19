const aiService = require("../service/ai.service");

module.exports.getResponse = async (req, res) => {
    try {
        const prompt = req.query.prompt;
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const response = await aiService(prompt);
        res.json({ response }); // Send JSON response
    } catch (error) {
        console.error("Error in getResponse:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

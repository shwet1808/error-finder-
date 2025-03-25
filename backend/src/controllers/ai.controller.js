const generateContent = require("../service/ai.service"); // Corrected path

module.exports.getReview = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ error: "Code is required" });
        }

        const response = await generateContent(code); 
        res.json({ response }); 
    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

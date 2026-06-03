const { chatWithAI } = require("../aiSystem");

exports.handleChatRequest = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: "Prompt is required"
            });
        }

        const result = await chatWithAI(prompt);

        if (result.success) {
            return res.status(200).json({
                success: true,
                answer: result.answer
            });
        }

        res.status(500).json({
            success: false,
            error: "AI momentalno ne vrati odgovor"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};
const { CohereClientV2 } = require("cohere-ai");

const cohere = new CohereClientV2({
    token: process.env.COHERE_API_KEY,
});

const chatWithAI = async (prompt) => {
    try {
        const response = await cohere.chat({
            model: "command-a-03-2025",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.1
        });

        return {
            success: true,
            answer: response.message.content[0].text
        };

    } catch (err) {
        return {
            success: false,
            error: err.message
        };
    }
};

module.exports = { chatWithAI };
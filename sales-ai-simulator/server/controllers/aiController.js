const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.evaluateResponse = async (req, res) => {
  try {
    const { objection, agentResponse } = req.body;

    if (!objection || !agentResponse) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide objection and agentResponse",
      });
    }

    const prompt = `
You are a sales training coach for life insurance agents.

Customer objection:
"${objection}"

Agent response:
"${agentResponse}"

Evaluate the agent response and return:
1. Confidence score out of 10
2. Empathy score out of 10
3. Objection handling score out of 10
4. What was good
5. What should improve
6. Better example response

Return the answer in clear JSON format.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    res.status(200).json({
      status: "success",
      data: {
        evaluation: response.text,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
const { GoogleGenerativeAI } = require("@google/generative-ai");

const KEY = process.env.GoogleGenerativeAIKey;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(KEY);

async function runGeminiPro(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text
}

module.exports = runGeminiPro;
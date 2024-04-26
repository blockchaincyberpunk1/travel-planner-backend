const { Configuration, OpenAIApi } = require("openai");

const getGPTResponse = async (prompt) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
        const response = await openai.createCompletion("text-davinci-002", {
            prompt: prompt,
            max_tokens: 150
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error(`Error in GPT-3 API Call: ${error}`);
        throw error;
    }
};

module.exports = getGPTResponse;

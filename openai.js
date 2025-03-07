exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey: process.env.OPENAI_API_KEY || "❌ API Key chưa được thiết lập!" })
    };
};

exports.handler = async function (event) {
    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey: process.env.OPENAI_API_KEY })
    };
};

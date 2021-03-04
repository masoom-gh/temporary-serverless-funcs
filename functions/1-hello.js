//http://localhost:8888/.netlify/functions/1-hello

// const person = { name: "Masoom" };

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: "First netlify function",
        // body: JSON.stringify(person),
    };
};

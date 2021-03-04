const items = require("../assets/data");

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
        // body: JSON.stringify(person),
    };
};

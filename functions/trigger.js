const request = require("request");

exports.handler = (event, context, callback) => {
  if (event.httpMethod === "GET") {
    console.log("PUB SUB SUBSCRIBE");
    console.log(event.queryStringParameters["hub.challenge"]);
    return callback(null, {
      statusCode: 200,
      body: event.queryStringParameters["hub.challenge"]
    });
  } else {
    console.log("TRIGGER BUILD HOOK");
    request.post(
      "https://api.netlify.com/build_hooks/5e3685526caab6d533357fb9",
      {},
      (err, res, body) => {
        if (err) {
          callback(null, {
            statusCode: 500,
            body: "Something went wrong"
          });
        } else {
          callback(null, {
            statusCode: 200,
            body: "Build Initiated"
          });
        }
      }
    );
  }
};

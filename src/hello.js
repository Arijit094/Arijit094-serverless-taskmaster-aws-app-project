"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "I'm glad you found this is helpful! If you have any more questions or need further assistance, feel free to ask. I'm here to help!!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};

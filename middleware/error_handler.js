const { CustomAPIError } = require("../errors/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;

/*
use any of the below code incase you arent comfortable with the above setup.
*/
// console.error(err.stack);
// res.status(500).json({ msg: err }); // displays a default long error msg.
/*   return res
    .status(500)
    .json({ msg: `You have a ${err.name}, and the message is ${err.message}` }); */ // setting up a custom error message.

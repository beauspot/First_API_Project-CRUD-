exports.errHandler = (err, req, res, next) => {
  console.error(err.stack);
  // res.status(500).json({ msg: err }); // displays a default long error msg.
  res
    .status(500)
    .json({ msg: `You have a ${err.name}, and the message is ${err.message}` }); // setting up a custom error message.
};

exports.get404Response = (req, res, next) => {
  res
    .status(404)
    .send(`<h1>The request, ${req.originalUrl} cannot be found<\h1>`);
};

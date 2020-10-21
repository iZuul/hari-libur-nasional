const not_found = (req, res, next) => {
  res.status(404);
  const error = new Error(`Not found - ${req.originalUrl}`);
  next(error);
}

module.exports = not_found
function requestMiddleware(fn) {
  return async (req, res, next) => {
    await fn(req, res, next);
    next();
  };
}

export default requestMiddleware;

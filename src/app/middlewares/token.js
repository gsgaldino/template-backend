const uuid = process.env.UUID;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token is required',
    });
  }

  const [keyword, token] = authorization.split(' ');

  if (keyword !== 'Bearer') {
    return res.status(401).json({
      message: 'Invalid token format',
    });
  }

  if (token !== uuid) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  next();
};

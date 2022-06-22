module.exports = (validator) => {
  const isValid = validator.validateAsync instanceof Function;
  if (!isValid) throw new Error('Invalid validator argument type, expect Function.');

  return async function (req, res, next) {
    try {
      const validated = await validator.validateAsync(req.body);
      req.body = validated;

      next();
    } catch (error) {
      if (error.isJoi) {
        return res.status(400).json({
          message: error.message,
          success: false,
        });
      }

      res.status(500).json({
        success: false,
        message: 'Failed to validate request body',
      });
    }
  };
};

module.exports = (validator) => {
  const isValid = validator.validateAsync instanceof Function;
  if (!isValid) throw new Error('Invalid ');

  return async function (req, res, next) {
    const validated = await validator.validateAsync(req.body);
    console.log('VALIDATED', validated);
    console.log('ENV', process.env.NODE_ENV);

    next();
  };
};

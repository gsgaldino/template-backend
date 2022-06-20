// const validate = (validator) => {
//   const isValid = validator.validateAsync instanceof Function;
//   if (!isValid) { throw new Error('Invalid validator argument type'); }

//   return async function (req, res, next) {
//     try {
//       console.log('BODY', req.body);
//       const validated = await validator?.validateAsync?.(req.body);
//       req.body = validated;
//       console.log('validate', typeof validator.validateAsync);
//       next();
//     } catch (error) {
//       console.log('ERROR', error);
//       if (error.isJoi) {
//         return res.status(422).json({
//           success: false,
//           message: error.message,
//         });
//       }

//       res.status(500).json({
//         success: false,
//         message: 'Failed to validate request body',
//       });
//     }
//   };
// };

// module.exports = validate;

module.exports = (validator) => {
  const isValid = validator.validateAsync instanceof Function;
  if (!isValid) throw new Error('Invalid ');
  console.log('VALIDATOR', validator);
  return async function (req, res, next) {
    console.log('REQ', req.body);

    const validated = await validator.validateAsync(req.body);
    console.log('VALIDATED', validated);

    next();
  };
};

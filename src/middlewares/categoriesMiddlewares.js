const schema = require('../validations/categoriesSchemas');

module.exports = {
  async validate(req, res, next) {
    try {
      const { name } = req.body;

      const validation = schema.categoriesSchema.validate({ name });

      if (validation.error) {
        const { error: { details: [{ message }] } } = validation;
        return (res.status(400).json({ message }));
      }

      next();
    } catch (error) {
      return res.status(500).json({ error });  
    }
  },
};
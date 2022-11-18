const Joi = require("joi");

async function register(req, res, next) {
  delete req.body.btn_submit;
  try {
    console.log(req.body)
    const registerSchema = Joi.object({
      full_name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().min(3).max(30).required(),
      password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
      address: Joi.string().min(3).max(30).required(),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
      image: Joi.string(),
      repeat_password: Joi.string(),
      
    });
    const result = await registerSchema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { register };

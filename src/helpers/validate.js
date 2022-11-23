const Joi = require("joi");

async function register(req, res, next) {
  delete req.body.btn_submit;
  try {
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
      password_confirmation: Joi.any()
        .valid(Joi.ref("password"))
        .required()
        .options({ language: { any: { allowOnly: "must match password" } } }),
    });
    const result = await registerSchema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
}
async function changePassword(req, res, next) {
  delete req.body.btn_submit;
  try {
    const registerSchema = Joi.object({
      current_password: Joi.string().valid(req.session.login.password),
      new_password: Joi.string().required().regex(/[a-zA-Z0-9]{3,30}/),
      password_confirmation: Joi.string().required().valid(Joi.ref('new_password')),
    });
    const result = await registerSchema.validateAsync(req.body);
    next();
  } catch (err) {
    res.redirect('changePassword');
  }
}
module.exports = { register, changePassword };

const {
  emailIsRequired,
  errorEmailFormated,
  passwordIsRequired,
  errorPasswordFormated,
} = require('../util/customMessage');
const { HTTP_BAD_REQUEST } = require('../util/statusHttp');

const validateEmail = (req, res, next) => {
  const { body: { email } } = req;

  if (!email) return res.status(HTTP_BAD_REQUEST).send(emailIsRequired);
  if (!email.match(/\S+@\S+\.\S+/)) return res.status(HTTP_BAD_REQUEST).send(errorEmailFormated);

  next();
};

const validatePassword = (req, res, next) => {
  const { body: { password } } = req;

  if (!password) return res.status(HTTP_BAD_REQUEST).send(passwordIsRequired);
  if (password.length < 6) return res.status(HTTP_BAD_REQUEST).send(errorPasswordFormated);

  next();
};

module.exports = { 
  validateEmail,
  validatePassword,
};

const {
  emailIsRequired,
  errorEmailFormated,
  passwordIsRequired,
  errorPasswordFormated,
} = require('../util/customMessage');

const validateEmail = (req, res, next) => {
  const {
    body: { email },
  } = req;

  if (!email) return res.status(400).send(emailIsRequired);
  if (!email.match(/\S+@\S+\.\S+/)) return res.status(400).send(errorEmailFormated);

  next();
};

const validatePassword = (req, res, next) => {
  const {
    body: { password },
  } = req;

  if (!password) return res.status(400).send(passwordIsRequired);
  if (password.length < 6) return res.status(400).send(errorPasswordFormated);

  next();
};

module.exports = { 
  validateEmail,
  validatePassword,
};

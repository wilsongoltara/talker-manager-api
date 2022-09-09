const login = require('express').Router();
const { validateEmail, validatePassword } = require('../middlewares/validateLogin');
const generateToken = require('../util/randomToken');
const { HTTP_OK_STATUS } = require('../util/statusHttp');

login.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});

module.exports = login;

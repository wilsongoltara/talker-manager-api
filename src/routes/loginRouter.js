const login = require('express').Router();
const { validateEmail, validatePassword } = require('../middlewares/validateLogin');
const generateToken = require('../util/randomToken');

login.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = login;

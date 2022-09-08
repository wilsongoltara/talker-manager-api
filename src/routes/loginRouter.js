const login = require('express').Router();
const generateToken = require('../util/randomToken');

login.post('/', (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = login;

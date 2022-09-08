const login = require('express').Router();

login.post('/', (req, res) => {
  const { body } = req;
  res.status(200).send(body);
});

module.exports = login;
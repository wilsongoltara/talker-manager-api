const talker = require('express').Router();
const { getTalkers } = require('../services/talkerServices');

const HTTP_OK_STATUS = 200;

// list all talkers
talker.get('/', async (_request, response) => {
  const talkers = await getTalkers();
  response.status(HTTP_OK_STATUS).json(talkers);
});

module.exports = talker;

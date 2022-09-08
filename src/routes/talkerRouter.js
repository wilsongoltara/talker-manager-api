const talker = require('express').Router();
const { getTalkers, getTalkerById } = require('../services/talkerServices');

const HTTP_OK_STATUS = 200;

talker.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(HTTP_OK_STATUS).json(talkers);
});

talker.get('/:id', async (req, res) => {
  const { params: { id } } = req;
  const { result, statusCode } = await getTalkerById(id);
  res.status(statusCode).json(result);
});

module.exports = talker;

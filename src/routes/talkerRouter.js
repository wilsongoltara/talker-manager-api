const talker = require('express').Router();
const {
  getTalkers,
  getTalkerById,
  addTalker,
  updateTalker,
} = require('../services/talkerServices');
const {
  validateToken,
  validateName,
  validateAge,
  validateWatched,
  validateRate,
  validateTalk,
} = require('../middlewares/validateTalker');
const { HTTP_OK_STATUS, HTTP_CREATED_STATUS } = require('../util/statusHttp');

talker.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(HTTP_OK_STATUS).json(talkers);
});

talker.get('/:id', async (req, res) => {
  const { params: { id } } = req;
  const { result, statusCode } = await getTalkerById(id);
  res.status(statusCode).json(result);
});

// talker.get('', () => { });

talker.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatched,
  validateRate,
  async (req, res) => {
    const { body } = req;
    const resultPost = await addTalker(body); 
    res.status(HTTP_CREATED_STATUS).json(resultPost);
  });

talker.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatched,
  validateRate,
  async (req, res) => {
    const { params: { id }, body } = req;
    const resultUpdate = await updateTalker(body, Number(id));
    res.status(HTTP_OK_STATUS).json(resultUpdate);
  });

// talker.delete('', () => { });

module.exports = talker;

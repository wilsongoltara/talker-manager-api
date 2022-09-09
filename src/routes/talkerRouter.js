const talker = require('express').Router();
const {
  addTalker,
  getTalkers,
  getTalkerById,
  getTalkerByTerm,
  updateTalker,
  deleteTalker,
} = require('../services/talkerServices');
const {
  validateToken,
  validateName,
  validateAge,
  validateWatched,
  validateRate,
  validateTalk,
} = require('../middlewares/validateTalker');
const { HTTP_OK_STATUS, HTTP_CREATED_STATUS, HTTP_NO_CONTENT } = require('../util/statusHttp');

talker.get('/', async (_req, res) => {
  const talkers = await getTalkers();
  res.status(HTTP_OK_STATUS).json(talkers);
});

talker.get('/search', validateToken, async (req, res) => { 
  const { query: { q } } = req;
  const result = await getTalkerByTerm(q);
  res.status(HTTP_OK_STATUS).json(result);
});

talker.get('/:id', async (req, res) => {
  const { params: { id } } = req;
  const { result, statusCode } = await getTalkerById(id);
  res.status(statusCode).json(result);
});

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
    const resultUpdate = await updateTalker(body, id);
    res.status(HTTP_OK_STATUS).json(resultUpdate);
  });

talker.delete('/:id', validateToken, async (req, res) => { 
  const { params: { id } } = req;
  await deleteTalker(id);
  res.sendStatus(HTTP_NO_CONTENT);
});

module.exports = talker;

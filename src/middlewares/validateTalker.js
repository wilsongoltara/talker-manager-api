const {
  tokenNotFound,
  invalidToken,
  nameIsRequired,
  errorNameFormated,
  ageIsRequired,
  minAgeTalker,
  WatchAtIsRequired,
  validWatch,
  rateIsRequired,
  validRate,
  talkIsRequired,
} = require('../util/customMessage');
const { HTTP_UNAUTHORIZED, HTTP_BAD_REQUEST } = require('../util/statusHttp');

const validateToken = (req, res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) return res.status(HTTP_UNAUTHORIZED).send(tokenNotFound);
  if (authorization.length !== 16) return res.status(HTTP_UNAUTHORIZED).send(invalidToken);

  next();
};

const validateName = (req, res, next) => {
  const { body: { name } } = req;
  
  if (!name) return res.status(HTTP_BAD_REQUEST).json(nameIsRequired);
  if (name.length < 3) return res.status(HTTP_BAD_REQUEST).json(errorNameFormated);
  
  next();
};

const validateAge = (req, res, next) => {
  const { body: { age } } = req;

  if (!age) return res.status(HTTP_BAD_REQUEST).json(ageIsRequired);
  if (age < 18) return res.status(HTTP_BAD_REQUEST).json(minAgeTalker);

  next();
};

const validateWatched = (req, res, next) => {
  const dateRegex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/; 
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) return res.status(HTTP_BAD_REQUEST).json(WatchAtIsRequired);
  if (!watchedAt.match(dateRegex)) return res.status(HTTP_BAD_REQUEST).json(validWatch);

  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  
  if (!rate && rate !== 0) return res.status(HTTP_BAD_REQUEST).json(rateIsRequired);
  if (rate < 1 || rate > 5) return res.status(HTTP_BAD_REQUEST).json(validRate);
  
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) return res.status(HTTP_BAD_REQUEST).json(talkIsRequired);

  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateWatched,
  validateRate,
  validateTalk,
};

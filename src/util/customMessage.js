const notFoundMessage = {
  message: 'Pessoa palestrante não encontrada',
};

const emailIsRequired = {
  message: 'O campo "email" é obrigatório',
};

const errorEmailFormated = {
  message: 'O "email" deve ter o formato "email@email.com"',
};

const passwordIsRequired = {
  message: 'O campo "password" é obrigatório',
};

const errorPasswordFormated = {
  message: 'O "password" deve ter pelo menos 6 caracteres',
};

const tokenNotFound = {
  message: 'Token não encontrado',
};

const invalidToken = {
  message: 'Token inválido',
};

const nameIsRequired = {
  message: 'O campo "name" é obrigatório',
};

const errorNameFormated = {
  message: 'O "name" deve ter pelo menos 3 caracteres',
};

const ageIsRequired = {
  message: 'O campo "age" é obrigatório',
};

const minAgeTalker = {
  message: 'A pessoa palestrante deve ser maior de idade',
};

const talkIsRequired = {
  message: 'O campo "talk" é obrigatório',
};

const WatchAtIsRequired = {
  message: 'O campo "watchedAt" é obrigatório',
};

const validWatch = {
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

const rateIsRequired = {
  message: 'O campo "rate" é obrigatório',
};

const validRate = {
  message: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

module.exports = {
  notFoundMessage,
  emailIsRequired,
  errorEmailFormated,
  passwordIsRequired,
  errorPasswordFormated,
  tokenNotFound,
  invalidToken,
  nameIsRequired,
  errorNameFormated,
  ageIsRequired,
  minAgeTalker,
  talkIsRequired,
  WatchAtIsRequired,
  validWatch,
  rateIsRequired,
  validRate,
};

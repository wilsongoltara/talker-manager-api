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

module.exports = {
  notFoundMessage,
  emailIsRequired,
  errorEmailFormated,
  passwordIsRequired,
  errorPasswordFormated,
};

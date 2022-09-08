const express = require('express');
const bodyParser = require('body-parser');
const talkersRouter = require('./routes/talkerRouter');
const loginRouter = require('./routes/loginRouter');

const HTTP_OK_STATUS = 200;

const app = express();
app.use(bodyParser.json());

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send({ message: 'hello, world!' });
});

app.use('/talker', talkersRouter);
app.use('/login', loginRouter);

// start server
const PORT = '3000';
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

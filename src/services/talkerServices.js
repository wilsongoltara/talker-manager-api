const fs = require('fs/promises');
const { notFoundMessage } = require('../util/customMessage');

const filepath = 'src/talker.json';

const getTalkers = async () => {
  try {
    const talkers = await fs.readFile(filepath, 'utf8');
    return JSON.parse(talkers);
  } catch (err) {
    return err;    
  }
};

const getTalkerById = async (id) => {
  try {
    const talkers = await getTalkers();
    const talkerFound = talkers.find((talker) => talker.id === Number(id));
    return talkerFound
      ? { result: talkerFound, statusCode: 200 }
      : { result: notFoundMessage, statusCode: 404 };
  } catch (err) {
    return err;
  }
};

module.exports = {
  getTalkers,
  getTalkerById,
};

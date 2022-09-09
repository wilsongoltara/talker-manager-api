const fs = require('fs/promises');
const { notFoundMessage } = require('../util/customMessage');
const { HTTP_OK_STATUS, HTTP_NOT_FOUND } = require('../util/statusHttp');

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
      ? { result: talkerFound, statusCode: HTTP_OK_STATUS }
      : { result: notFoundMessage, statusCode: HTTP_NOT_FOUND };
  } catch (err) {
    return err;
  }
};

const addTalker = async (newTalker) => { 
  try {
    const talkers = await getTalkers();
    const lastIndex = talkers.length - 1;
    const talkerAdd = {
      id: talkers[lastIndex].id + 1,
      ...newTalker,
    };
    
    talkers.push(talkerAdd);
    await fs.writeFile(filepath, JSON.stringify(talkers));
    
    return talkerAdd;
  } catch (err) {
    return err;
  }
};

const updateTalker = async (newTalker, id) => {
  try {
    const result = await getTalkers();
    const index = result.findIndex((obj) => obj.id === id);
    
    if (index !== -1) {   
      const talker = { id, ...newTalker };
      
      result.splice(index, 1);
      result.push(talker);
      await fs.writeFile(filepath, JSON.stringify(result));
      
      return talker;
    }
    
    return notFoundMessage;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getTalkers,
  getTalkerById,
  addTalker,
  updateTalker,
};

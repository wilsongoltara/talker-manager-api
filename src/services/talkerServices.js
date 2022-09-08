const fs = require('fs/promises');

const filePath = 'src/talker.json';

const getTalkers = async () => {
  try {
    const talkers = await fs.readFile(filePath, 'utf8');
    return JSON.parse(talkers);
  } catch (error) {
    console.error(`error read file: ${error}`);    
  }
};

module.exports = {
  getTalkers,
};

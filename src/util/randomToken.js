// excercícios dia 22.4
const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = generateToken;

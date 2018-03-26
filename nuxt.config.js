require('babel-register')

const mappings = require('./config/user.js');

module.exports = {
    env: {
        mappings,
    },
};

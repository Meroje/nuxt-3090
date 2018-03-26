require('babel-register')

mappings = require('./config/user.js');

module.exports = {
    env: {
        mappings,
    },
};

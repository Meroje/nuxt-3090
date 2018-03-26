import {userMapping} from './config/user.js';

module.exports = {
    plugins: ['~/plugins/authClient'],
    env: {
        userMapping,
    }
  }

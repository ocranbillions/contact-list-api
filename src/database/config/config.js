require('dotenv').config();

module.exports = {
  development: {
    database: 'contactlist',
    username: 'mac',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
};
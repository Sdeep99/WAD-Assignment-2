const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('./product')(sequelize, Sequelize);

module.exports = db;
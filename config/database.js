// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ReasonableNutrition', 'rstep', 'Zeitgeist', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

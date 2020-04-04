
const Sequelize = require('sequelize');
const {LocationCityModel, GeoVisitModel} = require('./models');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

const XX = sequelize.define('bolg', {});
const GeoVisit = GeoVisitModel(sequelize, Sequelize);
const LocationCity = LocationCityModel(sequelize, Sequelize);

module.exports = {
    GeoVisit,
    XX,
    LocationCity
}

//Sequelize.DataTypes.INTEGER
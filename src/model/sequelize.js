
const Sequelize = require('sequelize');
const GeoVisitModel = require('./geoVisit');
const LocationCityModel = require('./locationCities');
const sequelize = new Sequelize('advertiise-2019-10-17-22-9', 'abc', 'abc', {
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

Sequelize.DataTypes.INTEGER

const Sequelize = require('sequelize');
const {LocationCityModel, LocationStateModel, LocationCountryModel ,GeoVisitModel} = require('./locations');
const { UserModel, UserLocationModel} = require('./users');

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
// instance Model && build relationship btw tables
const LocationCity = LocationCityModel(sequelize, Sequelize);
const LocationState = LocationStateModel(sequelize, Sequelize);
const LocationCountry = LocationCountryModel(sequelize, Sequelize);
LocationCity.belongsTo(LocationState, {as: 'locationState', foreignKey: 'stateId'}); // city having a stateId (FK)
LocationState.belongsTo(LocationCountry, {as: 'locationCountry', foreignKey: 'countryId'});

// User: instanciate users and build relationship
const User = UserModel(sequelize, Sequelize);
const UserLocation = UserLocationModel(sequelize, Sequelize);
User.belongsTo(UserLocation, {as: 'userLocation', foreignKey: 'userId'});

module.exports = {
    sequelize,
    GeoVisit,
    XX,
    LocationCity,
    LocationState,
    LocationCountry,
    User,
    UserLocation,
}

//Sequelize.DataTypes.INTEGER
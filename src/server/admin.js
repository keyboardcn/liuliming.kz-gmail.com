const { 
    GeoVisit, XX, LocationCity, LocationState, LocationCountry,
    User, UserLocation, sequelize
 } = require('../model/sequelize');

const getLocationCities = async function (req, res) {
    //LocationCity.findAll().then(itm => res.json(itm));
    sequelize.query('select * from location_Cities').then(itm => res.json(itm));
}

const getLocationCityId = async function (req, res) {
    const cityId = req.params.id;
    LocationCity.findOne({
        where: {id: cityId},
        include: [{
            model: LocationState,
            as: 'locationState',
            attributes: ['name'],
            include: [{
                model: LocationCountry,
                as: 'locationCountry',
                attributes: ['name']
            }]
        }]
    }).then(itm => res.json(itm));
}

const getUserId = async function (req, res) {
    const userId = req.params.id;
    User.findOne({
        where: {userId: userId},
        include: [{
            model: UserLocation,
            as: 'userLocation',
        }]
    }).then(itm => res.json(itm));
}

const getGeoVisits = async function (req, res) {
    GeoVisit.findAll().then(itm => res.json(itm));
}

/**
 * demonstration: using raw query of mssql
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async function (req, res) {
    sequelize.query('SELECT ApplicationId, UserId, UserName, LoweredUserName, MobileAlias, IsAnonymous, LastActivityDate FROM aspnet_Users')
        .then(itm => res.json(itm));    
}

/**
 * run procedure demonstrate
 * @param {*} req 
 * @param {*} res 
 */
const personalizationGetApplicationId = async function (req, res) {
sequelize.query('aspnet_Personalization_GetApplicationId "app1", "C2EECA1C-D93D-4008-A119-C0ED6EEC4359"', 
                {type: sequelize.QueryTypes.SELECT})
 .then(itm => res.json(itm));
}


module.exports = {
    getLocationCities,
    getLocationCityId,
    getGeoVisits,
    getUserId,
    getUsers,
    personalizationGetApplicationId
}
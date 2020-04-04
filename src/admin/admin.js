const { GeoVisit, XX, LocationCity } = require('../model/sequelize');

const getLocationCities = async function (req, res) {
    LocationCity.findAll().then(itm => res.json(itm));
}

const getLocationCityId = async function (req, res) {
    const cityId = req.params.id;
    LocationCity.findOne({where: {id: cityId}}).then(itm => res.json(itm));
}

const getGeoVisits = async function (req, res) {
    GeoVisit.findAll().then(itm => res.json(itm));
}

module.exports = {
    getLocationCities,
    getLocationCityId,
    getGeoVisits
}
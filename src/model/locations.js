
 const LocationCityModel = function (sequelize, type) {
    return sequelize.define('locationCity', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.STRING,
        },
        stateId: {
            type: type.INTEGER,
            field: 'state_id'
        }
    }, {
        timestamps: false,
        tableName: 'location_Cities'
    });
    
}

const LocationStateModel = function (sequelize, type) {
    return sequelize.define('locationState', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.STRING
        },
        countryId: {
            type: type.INTEGER,
            field: 'country_id'
        }
    }, {
        timestamps: false,
        tableName: 'location_States'
    })
}
const LocationCountryModel = function (sequelize, type) {
    return sequelize.define('locationCountry', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.STRING
        },
    }, {
        timestamps: false,
        tableName: 'location_Countries'
    })
}

const GeoVisitModel = function (sequelize, type) {
    return sequelize.define('geoVisit', {
        id: {
            type: type.STRING,
            primaryKey: true
        },
        ipaddress: {
            type: type.DECIMAL
        },
        dtCreated: {
            type: type.DATE,
        }
    }, {
        timestamps: false,
        tableName: 'geo_visits'
    });
}
//LocationStateModel.hasOne(LocationCityModel, {as: 'locationState', foreignKey: 'stateId'}); // previous insert into the later table
// LocationCountryModel.hasOne(LocationStateModel, {as: 'locationCountry', foreignKey: 'countryId'});
module.exports = {
    LocationCityModel,
    LocationStateModel,
    LocationCountryModel,
    GeoVisitModel,
}

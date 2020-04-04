
 const LocationCityModel = function (sequelize, type) {
    return sequelize.define('locationCity', {
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: {
            type: type.DECIMAL
        },
        stateId: {
            type: type.INTEGER,
            field: 'state_id'
        }
    }, {
        timestamps: false,
        tableName: 'location_cities'
    });
    
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

module.exports = {
    LocationCityModel,
    GeoVisitModel,
}

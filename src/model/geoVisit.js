
module.exports = function (sequelize, type) {
    return sequelize.define('geo_visit', {
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

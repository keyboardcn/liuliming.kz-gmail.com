
module.exports = function (sequelize, type) {
    return sequelize.define('location_city', {
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

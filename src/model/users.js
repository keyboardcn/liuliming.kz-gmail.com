const UserModel = function (sequelize, type) {
    return sequelize.define('user', {
        userId: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        applicationId: {
            type: type.UUID,
        },
        isAnonymous: {
            type: type.INTEGER,
        },
        userName: {
            type: type.STRING,
        },
        loweredUserName: {
            type: type.STRING,
        },
        mobileAlias: {
            type: type.STRING,
        },
        lastActivityDate: {
            type: type.DATE
        }
    }, {
        timestamps: false,
        tableName: 'aspnet_Users'
    });
}

const UserLocationModel = function(sequelize, type) {
    return sequelize.define('userLocation', {
        userId: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false,
            primaryKey: true,
            field: 'userID'
        },
        countryId: {
            type: type.INTEGER,
            field: 'country_id',
        },
        stateId: {
            type: type.INTEGER,
            field: 'state_id',
        },
        city: {
            type: type.STRING,
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.NOW,
            field: 'dtCreated'
        },
        updatedAt: {
            type: type.DATE,
            field: 'dtModified'
        },
    }, {
            timestamps: true,
            tableName: 'aspnet_UserLocation'
        });
    }

    module.exports = {
        UserModel,
        UserLocationModel
    }
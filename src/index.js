// we set routes here
const dotenv = require("dotenv"); //load env settings
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const {
    getLocationCities,
    getLocationCityId,
    getGeoVisits,
    getUserId,
    getUsers,
    personalizationGetApplicationId
} = require('./server/admin');

app.get('/adm/geovisits', getGeoVisits);
app.get('/adm/locationcities', getLocationCities);
app.get('/adm/locationcities/:id', getLocationCityId);
app.get('/adm/users/:id', getUserId);
app.get('/adm/users', getUsers);
app.get('/adm/getAppId',personalizationGetApplicationId);

app.listen(5000, function () {
    console.log('Server is running..');
});



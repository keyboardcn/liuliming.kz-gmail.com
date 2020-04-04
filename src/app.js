const dotenv = require("dotenv"); //load env settings
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const {
    getLocationCities,
    getLocationCityId,
    getGeoVisits
} = require('./admin/admin');

app.get('/api/geovisits', getGeoVisits);
app.get('/api/locationcities', getLocationCities);
app.get('/api/locationcities/:id', getLocationCityId);

app.listen(5000, function () {
    console.log('Server is running..');
});



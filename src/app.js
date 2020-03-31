const { GeoVisit, XX, LocationCity } = require('./model/sequelize');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/api/geovisit', (req, res) => {
    GeoVisit.findAll().then(itm => res.json(itm))
})

app.get('/api/locationcity', (req, res) => {
    LocationCity.findAll().then(itm => res.json(itm))
})
app.get('/api/locationcity/:id', (req, res) => {
    const cityId = req.params.id;
    LocationCity.findOne({where: {id: cityId}}).then(itm => res.json(itm))
})

app.listen(5000, function () {
    console.log('Server is running..');
});


// no sequelize
// app.get('/', function (req, res) {

//     var sql = require("mssql");

//     config for your database
//     var config = {
//         user: 'abc',
//         password: 'abc',
//         driver: "msnodesqlv8",
//         server: 'localhost', 
//         database: 'advertiise-2019-10-17-22-9',
//         port: 1433,
//     };

//     connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(`CONNECT: ${err}`);

//         create Request object
//         var request = new sql.Request();

//         query to the database and get the records
//         request.query('SELECT * FROM listing_Location where id = 59', function (err, recordset) {

//             if (err) console.log(`QUERY: ${err}`)

//             send records as a response
//             res.send(recordset);

//         });
//     });
// });

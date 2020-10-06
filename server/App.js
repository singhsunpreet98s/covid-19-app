const express = require('express');
const world = require('./world');
const app = express();
const countries = require('./countries');
const daily = require('./usdaily');
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'POST');
   res.setHeader('Access-Control-Allow-Methods', 'DELETE');
   res.setHeader('Access-Control-Allow-Methods', 'GET');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});

app.get('/world', (req, res) => {
   res.send(world);
})
app.get('/countries', (req, res) => {
   res.send(countries);
})
app.get('/daily', (req, res) => {
   res.send(daily);
})
app.listen(5000, () => {
   console.log('server is running on 5000')
})
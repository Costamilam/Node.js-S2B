const express = require('express');
const bodyParser = require('body-parser');

let user = require('./controllerUser.js');
let product = require('./controllerProduct.js');
let request = require('./controllerRequest.js');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);
app.use('/product', product);
app.use('/request', request);

app.listen(3000, () => console.log('Started successfully'));

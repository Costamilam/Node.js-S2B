const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let user = require('./controller/controllerUser.js');
let meeting = require('./controller/controllerMeeting.js');

app.use(bodyParser.json());

app.use('/user', user);
//app.use('/meeting', meeting);

app.use(express.static(`${__dirname}/frontend`));

app.listen(3000, () => console.log('Started successfully'));

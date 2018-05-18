const express = require('express');
const bodyParser = require('body-parser');

/*let auth = require('./controllerAuth.js');
let user = require('./controllerUser.js');
let meeting = require('./controllerMeeting.js');

app.use('/auth', auth);
app.use('/user', user);
app.use('/meeting', meeting);*/

const app = express();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}`));

app.listen(3000, () => console.log('Started successfully'));

const express = require('express');
const app = express();

app.get('/helloworld', (request, response) => { 
    response.json({response: 'Hello World!'});
});

app.listen(3000, () => console.log('sucess'));

const serviceUser = require('../service/serviceUser.js');
const bodyParser = require('body-parser');

let router = require('express').Router();

//Search user
router.get('/', async function(request, response) {
    let object = {
        email: request.body.userEmail, 
        password: request.body.userPassword
    }
    //Validar entradas

    response.send(await serviceUser.find({user: 'abc'}));
});

//Insert user
router.post('/', async function(request, response) {
    let object = {
        name: request.body.userName, 
        email: request.body.userEmail, 
        password: request.body.userPassword, 
        phone: request.body.userPhone
    }
    //Validar entradas

    response.send(await serviceUser.insert(object));
});

//Update user
router.put('/', async function(request, response) {
    let objectSearch = {
        oldEmail: request.body.userOldEmail,
        oldPassword: request.body.userOldPassword
    }
    let objectUpdate = {
        name: request.body.userName, 
        email: request.body.userEmail, 
        password: request.body.userPassword, 
        phone: request.body.userPhone
    }
    //Validar entradas

    response.send(await serviceUser.update(objectSearch, objectUpdate));
});

//Delete user
router.delete('/', async function(request, response) {
    let object = {
        email: request.body.userEmail, 
        password: request.body.userPassword
    }
    //Validar entradas

    response.send(await serviceUser.remove(object));
});

module.exports = router;

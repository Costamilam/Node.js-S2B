const serviceUser = require('../service/serviceUser.js');

let router = require('express').Router();

//Search user
router.get('/', async function(request, response) {
    let object = {
        username: request.body.userUsername, 
        password: request.body.userPassword
    }
    //Validar entradas

    response.send(await serviceUser.find(object));
});

//Insert user
router.post('/', async function(request, response) {
    let object = {
        name: request.body.userName, 
        username: request.body.userUsername, 
        password: request.body.userPassword, 
        email: request.body.userEmail, 
        facebook: request.body.userFacebook,
        snapchat: request.body.userSnapchat,
        twitter: request.body.userTwitter, 
        instagram: request.body.userInstagram, 
        whatsapp: request.body.userWhatsapp, 
        phone: request.body.userPhone
    }
    //Validar entradas
    let a = await serviceUser.insert(object)
    console.log(a.result)
    //response.status(200).json(a.result);
    response.type('text/html').send('<p>success</p>');
});

//Update user
router.put('/', async function(request, response) {
    let objectSearch = {
        username: request.body.userUsername, 
        password: request.body.userPassword
    }
    let objectUpdate = {
        name: request.body.userName, 
        password: request.body.userPassword, 
        email: request.body.userEmail, 
        facebook: request.body.userFacebook,
        snapchat: request.body.userSnapchat,
        twitter: request.body.userTwitter, 
        instagram: request.body.userInstagram, 
        whatsapp: request.body.userWhatsapp, 
        phone: request.body.userPhone
    }
    //Validar entradas

    response.send(await serviceUser.update(objectSearch, objectUpdate));
});

//Delete user
router.delete('/', async function(request, response) {
    let object = {
        username: request.body.userUsername, 
        password: request.body.userPassword
    }
    //Validar entradas

    response.send(await serviceUser.remove(object));
});

module.exports = router;

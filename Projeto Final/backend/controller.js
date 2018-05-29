const service = require('./service.js');

let router = require('express').Router();

//Auth user
router.post('/user/auth', async function(request, response) {
    let object = {
        userUsername: request.body.userUsername, 
        userPassword: request.body.userPassword
    }
    //Validate

    let result = await service.find(object, 'user');

    if(result === []) {
        response.status(203).send({title: 'Usuário ou senha inválido', message: 'Qualquer dúvida entre em contato com o suporte'});
    } else {
        response.send({title: `Bem vindo ${result[0].userName}`, message: 'Autenticação concluída com sucesso', result: result});
    }
});

//Search collection
router.get('/:collection/(:column/:search)?', async function(request, response) {
    //Validate

    let object = {};
    if(request.params.column && request.params.search) {
        object[request.params.column] = new RegExp(request.params.search.replace(' ', '.*'), 'i');
    }

    let result = await service.find(object, request.params.collection);

    response.send({title: `${result.length} resultados encontrados`, message: '', result: result});
});

//Insert collection
router.post('/:collection/', async function(request, response) {
    //Validate

    console.log(request.body);

    let result = await service.insert(request.body, request.params.collection);

    response.send({title: `${result.length} resultados encontrados`, message: '', result: result});
});

//Update collection
router.put('/:collection/', async function(request, response) {
    //Validate

    let result = await service.update(request.body.search.id, request.body.update, request.params.collection);

    response.send({title: `${result.length} resultados encontrados`, message: '', result: result});
});

//Delete collection
router.delete('/:collection/', async function(request, response) {
    //Validate

    let result = await service.remove(request.body, request.params.collection);

    response.send({title: `${result.length} resultados encontrados`, message: '', result: result});
});

module.exports = router;

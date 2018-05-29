const service = require('./service.js');
const bcrypt = require('./bcrypt.js');

let router = require('express').Router();

const hat = require('hat');

//Auth user
router.post('/user/auth', async function(request, response) {
    let object = {
        userUsername: request.body.userUsername, 
        userPassword: request.body.userPassword
    }
    //Validate
    
    let result = await service.find({userUsername: object.userUsername}, 'user');

    console.log(await bcrypt.check(result[0].userPassword, object.userPassword, result[0].userSalt))
    console.log('pass '+result[0].userPassword)


    if(result !== [] && await bcrypt.check(result[0].userPassword, object.userPassword, result[0].userSalt)) {
        result[0].userToken = hat();
        await service.update(result[0]._id, {token: result[0].userToken}, 'user')
        response.send({title: `Bem vindo ${result[0].userName}`, message: `Autenticação concluída com sucesso. Seu tokende acesso: ${result[0].token}`, result: result});
    } else {
        response.status(203).send({title: 'Usuário ou senha inválido', message: 'Qualquer dúvida entre em contato com o suporte'});
    }
});

//Search collection
router.get('/:collection/(:column/:search/)?', async function(request, response) {
    //Validate

    console.log(request.params);

    let object = {};
    if(request.params.column && request.params.search) {
        object[request.params.column] = new RegExp(request.params.search.replace(' ', '.*'), 'i');
    }

    console.log(object)

    let result = await service.find(object, request.params.collection);

    response.send({title: `${result.length} resultado(s) encontrado(s)`, message: '', result: result});
});

//Insert collection
router.post('/:collection/', async function(request, response) {
    //Validate

    if(request.params.collection === 'user') {
        let hash = await bcrypt.hashPassword(request.body.userPassword);

        request.body.userPassword = hash.userPassword;
        request.body.userSalt = hash.userSalt;
    }

    let result = await service.insert(request.body, request.params.collection);

    response.send({title: `${result.length} dado(s) cadastradio(s)`, message: '', result: result});
});

//Update collection
router.put('/:collection/', async function(request, response) {
    //Validate

    let result = await service.update(request.body.search.id, request.body.update, request.params.collection);

    response.send({title: `${result.length} dado(s) atualizado(s)`, message: '', result: result});
});

//Delete collection
router.delete('/:collection/', async function(request, response) {
    //Validate

    let result = await service.remove(request.body, request.params.collection);

    response.send({title: `${result.length} dado(s) excluido(s)`, message: '', result: result});
});

module.exports = router;

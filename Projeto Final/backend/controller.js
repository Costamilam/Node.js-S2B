const service = require('./service.js');

let router = require('express').Router();

router.all('/', (request, response) => {console.log('New visit'); response.redirect('./index.html');});

//Auth user
router.post('/user/auth', async function(request, response) {
    let object = {
        username: request.body.userUsername, 
        password: request.body.userPassword
    }
    //Validate

    response.send(await service.find(object, 'user'));
});

//Search collection
router.get('/:collection/(:column/:search)?', async function(request, response) {
    //Validate

    let object = {};
    if(request.params.column && request.params.search) {
        object[request.params.column] = new RegExp(request.params.search.replace(' ', '.*'), 'i');
    }

    response.send(await service.find(object, request.params.collection));
});

//Insert collection
router.post('/:collection/', async function(request, response) {
    //Validate

    response.send(await service.insert(request.body, request.params.collection));
});

//Update collection
router.put('/:collection/', async function(request, response) {
    //Validate

    response.send(await service.update(request.body.search.id, request.body.update, request.params.collection));
});

//Delete collection
router.delete('/:collection/', async function(request, response) {
    //Validate

    console.log('\n');
    console.log(request.body);

    response.send(await service.remove(request.body, request.params.collection));
});

module.exports = router;

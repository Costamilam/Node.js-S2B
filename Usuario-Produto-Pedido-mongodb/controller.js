Object.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `    ${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}

const mongoClient = require('mongodb').MongoClient;
const urlAccess = 'mongodb://localhost:27017';
const databaseName = 'UsuProPed';
const collectionUser = 'User';
const collectionProducts = 'Product';
const collectionRequests = 'Request';

let option = 'insertUser';

let userId = '';
let userName = '';
let userEmail = '';
let userPassword = '';
let userSenha = '';

let productId = '';
let productName = '';
let productDescription = '';
let productValue = '';

let requestId = '';
let requestProducts = [{}];
let requestDeliveryDate = '';

//Simples example of connection, insert and select
(async function() {
    let connection;

    try {
        //Connect in MongoDB
        connection = await mongoClient.connect(urlAccess);
        console.log('Connected successfully');

        //Database selected
        const database = connection.db(databaseName);
        console.log('Database selected');

        switch(option) {
            case 'insertUser':
                //Insert document in collection
                let result = await database.collection(collectionUser).insertOne({
                    name: 'Gui', 
                    email: 'a@a.a', 
                    password: 'asasasaa', 
                    phone: '123456789'
                });
                console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

            case 'findUser':
                //Find document in collection
                let cursor = await database.collection(collectionUser).find({});
                console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
                cursor.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateUser':
                //Update document in collection
                let update = await database.collection(collectionUser).updateOne({
                    _id: userId
                }, 
                {
                    $set: {
                        name: 'Gui', 
                        email: 'b@b.b', 
                        password: 'uiouio', 
                        phone: '987654321'
                    }
                });
                console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);

            case 'removeUser':
                //Remove documents in collection
                let remove = await database.collection(collectionUser).remove({
                    _id: userId
                }, false);
                console.log(`The document removed\n${remove.toString()}`);

            case 'insertProduct':
                //Insert document in collection
                let result = await database.collection(collectionProduct).insertOne({
                    name: 'tal', 
                    description: 'uma la', 
                    value: 2
                });
                console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

            case 'findProduct':
                //Find document in collection
                let cursor = await database.collection(collectionProduct).find({});
                console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
                cursor.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateProduct':
                //Update document in collection
                let update = await database.collection(collectionProduct).updateOne({
                    _id: productId
                }, 
                {
                    $set: {
                        name: 'tal', 
                        description: 'uma la', 
                        value: 2
                    }
                });
                console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);

            case 'removeProduct':
                //Remove documents in collection
                let remove = await database.collection(collectionProduct).remove({
                    _id: productId
                }, false);
                console.log(`The document removed\n${remove.toString()}`);

            case 'insertRequest':
                //Insert document in collection
                let result = await database.collection(collectionRequest).insertOne({
                    user: userId, 
                    products: [{
                        product: productId, 
                        quantidade: 3
                    }], 
                    deliveryDate: '2018-05-29 16:30:42'
                });
                console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

            case 'findRequest':
                //Find document in collection
                let cursor = await database.collection(collectionRequest).find({});
                console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
                cursor.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateRequest':
                //Update document in collection
                let update = await database.collection(collectionRequest).updateOne({
                    _id: requestId
                }, 
                {
                    $set: {
                        user: '5af48362869e581a8c35b39f', 
                        products: [{
                            product: '5af48362869e581a8c35b3a0', 
                            quantidade: 3
                        }], 
                        deliveryDate: '2018-05-29 16:30:42'
                    }
                });
                console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);

            case 'removeRequest':
                //Remove documents in collection
                let remove = await database.collection(collectionRequest).remove({
                    _id: requestId
                }, false);
                console.log(`The document removed\n${remove.toString()}`);

            default:
                console.log('Nenhuma ação foi realizada!');
        }
    } catch(exceptionError) {
        console.log(exceptionError);
    } finally {
        //If conneced, disconnect
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully');
        }
    }
})();

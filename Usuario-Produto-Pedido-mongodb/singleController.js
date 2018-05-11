/*Object.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `    ${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}*/
const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const urlAccess = 'mongodb://localhost:27017';
const databaseName = 'UsuProPed';
const collectionUser = 'User';
const collectionProducts = 'Product';
const collectionRequests = 'Request';

let option;

let userId = '';
let userName = 'test';
let userPhone = 'test';
let userEmail = 'test';
let userPassword = 'test';

let productId = '';
let productName = '';
let productDescription = '';
let productValue = '';

let requestId = '';
let requestDeliveryDate = '';
let requestUser = '';
let requestProducts = [{
    id: '', 
    quantity: 0
}];

//Simples example of connection, insert, select, update and delete
async function main(option) {
    let connection;

    try {
        //Connect in MongoDB
        connection = await mongoClient.connect(urlAccess);
        console.log('Connected successfully');

        //Database selected
        const database = connection.db(databaseName);
        console.log('Database selected');

        let insert;
        let select;
        let update;
        let remove;

        switch(option) {
            case 'insertUser':
                //Insert document in collection
                insert = await database.collection(collectionUser).insertOne({
                    name: userName, 
                    email: userEmail, 
                    password: userPassword, 
                    phone: userPhone
                });
                return`Inserted ${insert.insertedCount} document into the collection. Document id: ${insert.insertedId}`;

            case 'findUser':
                //Find document in collection
                select = await database.collection(collectionUser).find({});
                console.log(`Find ${await select.count()} documents into the collection. Document values:`);
                select.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateUser':
                //Update document in collection
                update = await database.collection(collectionUser).updateOne({
                    _id: userId
                }, 
                {
                    $set: {
                        name: userName, 
                        email: userEmail, 
                        password: userPassword, 
                        phone: userPhone
                    }
                });
                console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);

            case 'removeUser':
                //Remove documents in collection
                remove = await database.collection(collectionUser).remove({
                    _id: userId
                }, false);
                return`The document removed\n${remove.toString()}`;

            case 'insertProduct':
                //Insert document in collection
                insert = await database.collection(collectionProduct).insertOne({
                    name: productName, 
                    description: productDescription, 
                    value: productValue
                });
                return`Inserted ${insert.insertedCount} document into the collection. Document id: ${insert.insertedId}`;

            case 'findProduct':
                //Find document in collection
                select = await database.collection(collectionProduct).find({});
                console.log(`Find ${await select.count()} documents into the collection. Document values:`);
                select.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateProduct':
                //Update document in collection
                update = await database.collection(collectionProduct).updateOne({
                    _id: productId
                }, 
                {
                    $set: {
                        name: productName, 
                        description: productDescription, 
                        value: productValue
                    }
                });
                return `The id document ${update.upsertedId} has been changed:\n${update.result}`;

            case 'removeProduct':
                //Remove documents in collection
                remove = await database.collection(collectionProduct).remove({
                    _id: productId
                }, false);
                return`The document removed\n${remove.toString()}`;

            case 'insertRequest':
                //Insert document in collection
                insert = await database.collection(collectionRequest).insertOne({
                    deliveryDate: requestDeliveryDate, 
                    user: requestUser, 
                    products: requestProducts
                });
                return`Inserted ${insert.insertedCount} document into the collection. Document id: ${insert.insertedId}`;

            case 'findRequest':
                //Find document in collection
                select = await database.collection(collectionRequest).find({});
                console.log(`Find ${await select.count()} documents into the collection. Document values:`);
                select.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateRequest':
                //Update document in collection
                update = await database.collection(collectionRequest).updateOne({
                    _id: requestId
                }, 
                {
                    $set: {
                        deliveryDate: requestDeliveryDate, 
                        user: requestUser, 
                        products: requestProducts
                    }
                });
                return`The id document ${update.upsertedId} has been changed:\n${update.result}`;

            case 'removeRequest':
                //Remove documents in collection
                remove = await database.collection(collectionRequest).remove({
                    _id: requestId
                }, false);
                return`The document removed\n${remove.toString()}`;

            default:
                return 'Nenhuma ação foi realizada!';
        }
    } catch(exceptionError) {
        return exceptionError;
    } finally {
        //If conneced, disconnect
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully');
        }
    }
};

app.get('/action/:action', async function(request, response) {
    let parameters = request.params;

    if(!parameters.action && parameters.action.match('(insertUser|findUser|updateUser|removeUser|insertProduct|findProduct|updateProduct|removeProduct|findRequest|updateRequest|updateRequest|removeRequest)')) { 
        response.send(await main(request.params.action));
    } else {
        response.status(400).send('Action invalid');
    }
});

app.listen(3000, () => console.log('Started successfully'));

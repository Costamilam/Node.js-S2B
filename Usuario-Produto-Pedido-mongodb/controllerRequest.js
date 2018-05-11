const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const urlAccess = 'mongodb://localhost:27017';
const databaseName = 'UsuProPed';
const collection = 'User';

let requestId = '';
let requestDeliveryDate = '';
let requestUser = '';
let requestProducts = [{
    id: '', 
    quantity: 0
}];

//Simples example of connection, insert, select, update and delete
async function action(option) {
    let connection;

    try {
        //Connect in MongoDB
        connection = await mongoClient.connect(urlAccess);
        console.log('Connected successfully');

        //Database selected
        const database = connection.db(databaseName);
        console.log('Database selected');

        switch(option) {
            case 'insert':
                //Insert document in collection
                insert = await database.collection(collectionRequest).insertOne({
                    deliveryDate: requestDeliveryDate, 
                    user: requestUser, 
                    products: requestProducts
                });
                return `Inserted ${insert.insertedCount} document into the collection. Document id: ${insert.insertedId}`;

            case 'find':
                //Find document in collection
                select = await database.collection(collectionRequest).find({});
                console.log(`Find ${await select.count()} documents into the collection. Document values:`);
                select.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'update':
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
                return `The id document ${update.upsertedId} has been changed:\n${update.result}`;

            case 'remove':
                //Remove documents in collection
                remove = await database.collection(collectionRequest).remove({
                    _id: requestId
                }, false);
                return `The document removed\n${remove.toString()}`;

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

let router = express.Router();

//Define the route actions 
router.get('/:action', async function(request, response) {
    let parameters = request.params;

    if(parameters.action && parameters.action.match('(insert|find|update|remove)')) { 
        response.send(await action(parameters.action));
    } else {
        response.status(400).send('Action invalid');
    }
});

module.exports = router;

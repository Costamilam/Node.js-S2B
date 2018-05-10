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
const collectionUsuser = 'User';
const collectionProducts = 'Product';
const collectionRequests = 'Request';

let option = '';

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
                let result = await database.collection(collectionProducts).insertOne({nome: 'Gui', email: 'a@a.a', senha: 'asasasaa', telefone: '123456789'});
                console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

            case 'findUser':
                //Find document in collection
                let cursor = await database.collection(collectionProducts).find({});
                console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
                cursor.forEach(function(element) {
                    console.log(`${element}`);
                });

            case 'updateUser':
                //Update document in collection
                let update = await database.collection(collectionProducts).updateOne({key: 'new value 1'}, {$set: {key: 'new value 1', newKey: 'new key and value 1'}});
                console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);
            
            case 'removeUser':
                //Remove documents in collection
                let remove = await database.collection(collectionProducts).remove({key: 'value 4'}, false);
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

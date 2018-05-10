Object.prototype.toString = function() {
    let str = '{\n';

    for(let elemento of Object.keys(this)) {
        str += `    ${elemento}: ${this[elemento]},\n`
    }

    return `${str.trim(',\n', '')}\n}`;
}

const mongoClient = require('mongodb').MongoClient;
const urlAccess = 'mongodb://localhost:27017';
const databaseName = 'example';

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

        //Insert document in collection
        let result = await database.collection('example').insertOne({key: 'value 4'});
        console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

        //Find document in collection
        let cursor = await database.collection('example').find({});
        console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
        cursor.forEach(function(element) {
            console.log(`${element}`);
        });

        //Update document in collection
        let update = await database.collection('example').updateOne({key: 'new value 1'}, {$set: {key: 'new value 1', newKey: 'new key and value 1'}});
        console.log(`The id document ${update.upsertedId} has been changed:\n${update.result}`);
        
        //Remove documents in collection
        let remove = await database.collection('example').remove({key: 'value 4'}, false);
        console.log(`The document removed\n${remove.toString()}`);
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

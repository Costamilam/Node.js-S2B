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
        let result = await database.collection('example').insertOne({key: 'value'});
        console.log(`Inserted ${result.insertedCount} document into the collection. Document id: ${result.insertedId}`);

        //Find document in collection
        let cursor = await database.collection('example').find({});
        console.log(`Find ${await cursor.count()} documents into the collection. Document values:`);
        cursor.forEach(function(element) {
            console.log(element);
        });
    } catch(exceptionError) {
        console.log(exceptionError);
    } finally {
        //If conneced, disconnect
        if(client) {
            await client.close();
            console.log('Disconnected successfully');
        }
    }
})();

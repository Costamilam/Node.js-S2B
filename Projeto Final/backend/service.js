const mongodb = require('mongodb');

let connection;

//Connect MongoDB
async function MongodbConnect(collectionName) {
    try {
        connection = await mongodb.MongoClient.connect('mongodb://localhost:27017');

        console.log('Connect successfully')

        return connection.db('dataPOA').collection(collectionName);
    } catch (error) {
        console.log(error);
    }
}

//Insert document of collection
module.exports.insert = async function(object, collectionName) {
    try {
        let collection = await MongodbConnect(collectionName);

        let insert = await collection.insertOne(object);

        return insert.ops;
    } catch (error) {
        console.log(error);
    } finally {
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully');
        }
    }
}

//Find document of collection
module.exports.find = async function(object, collectionName) {
    try {
        let collection = await MongodbConnect(collectionName);

        let select = await collection.find(object).toArray();

        return select;
    } catch (error) {
        console.log(error);
    } finally {
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully');
        }
    }
}

//Update document of collection
module.exports.update = async function(objectId, objectUpdate, collectionName) {
    try {
        let collection = await MongodbConnect(collectionName);

        let update = await collection.updateOne({"_id": mongodb.ObjectId(objectId)}, { $set: objectUpdate });

        return update;
    } catch (error) {
        console.log(error);
    } finally {
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully');
        }
    }
}

//Remove document of collection
module.exports.remove = async function(object, collectionName) {
    try {
        let collection = await MongodbConnect(collectionName);

        let remove = await collection.remove(object, false);

        console.log('Document removed. _id: ')
        console.log(remove)

        return remove;
    } catch (error) {
        console.log(error);
    } finally {
        if(connection) {
            await connection.close();
            console.log('Disconnected successfully\n');
        }
    }
}

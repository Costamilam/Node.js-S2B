const mongoClient = require('mongodb').MongoClient;

module.exports.connection = async function() {
    try {
        //Connect MongoDB
        let database = await mongoClient.connect('mongodb://localhost:27017');
        console.log('Connected successfully');
    
        //Select and return database connection
        return database.db('dataPOA');
    } catch (error) {
        console.log(error);
        return error;
    }
}

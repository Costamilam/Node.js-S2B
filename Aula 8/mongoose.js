const mongose = require('mongoose');
const urlAccess = 'mongodb://localhost:27017/exampleMongose';

(async function() {
    let connectionDB;
    try {
        connectionDB = await mongose.connect(urlAccess);
    } catch(exceptionError) {
        console.log(exceptionError);
    } finally {
        //If conneced, disconnect
        if(connectionDB && connectionDB.connection) {
            connectionDB.connection.close();
            console.log('Disconnected successfully');
        }
    }
})(); 
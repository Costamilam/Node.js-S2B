import { readFile } from 'fs';

const importObject = require('./export.js');

const fileSystem = require('fs');

let jsonImportWithFile;

fileSystem.readFile('file.json', (error, data) => {
    if(error) {
        console.log(`Read file error\n    ${error}`);
    } else {
        console.log(data.toString());

        // If read file is invalid
        try {
            jsonImportWithFile = JSON.parse(data);
        } catch (exceptionError) {
            console.log(`File invalid\n    ${exceptionError}`);
        }

        console.log(jsonImportWithFile);
    }
});

console.log(jsonImportWithFile); // Return 'undefined' because readFile function is async

(async function() {
    try {
        let data = await readFile('file.json');
        const JSONObject = JSON.parse(data);
        console.log(JSONObject);
    } catch(exceptionError) {
        console.error(exceptionError);
    }
})();

const fileSystemPromisse = require('fs');

fileSystemPromisse.promises.copyFile('file.json', 'destination.txt')
    .then(function() {
        fileSystemPromisse.rename('destination.txt', 'rename.json');
    })
    .then(() => console.log('file.json was copied to destination.txt and renamed o rename.json'))
    .catch(() => console.log('The file could not be copied or not renamed'));
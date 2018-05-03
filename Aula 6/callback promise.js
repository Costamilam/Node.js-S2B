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
        } catch (error) {
            console.log(`File invalid\n    ${error}`);
        }

        console.log(jsonImportWithFile);
    }
});

console.log(jsonImportWithFile); // Return 'undefined' because readFile function is async

const fileSystemPromisse = require('fs');

fileSystemPromisse.promises.copyFile('file.json', 'destination.txt')
    .then(function() {
        fileSystemPromisse.rename('destination.txt', 'rename.json');
    })
    .then(() => console.log('file.json was copied to destination.txt and renamed o rename.json'))
    .catch(() => console.log('The file could not be copied, consequently, not renamed'));
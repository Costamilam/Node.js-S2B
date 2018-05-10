const fetch = require('node-fetch');

//Error class
class HTTPError extends Error {
    constructor(response) {
        super(`status ${response.status} for url ${response.url}`);
        this.name = 'HTTPError';
        this.response = response
    }
}

//Request function
async function getJSON(url) {
    try {
        let response = await fetch(url);
        if(response.ok) {
            return response.json();
        } else {
            throw new HTTPError(response);
        }
    } catch (exceptionError) {
        throw exceptionError;
    }
}

//Request function usage
(async function() {
    try {
        console.log(await getJSON('https://api.github.com/repos/Costamilam'));
    } catch(exceptionError) {
        console.log(exceptionError);
    }
})();
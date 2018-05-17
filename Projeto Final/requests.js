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
exports.getJSON = async function() {
    try {
        let response = await fetch('http://datapoa.com.br/api/action/datastore_search?resource_id=9b019d7c-1956-4cf8-bc75-9041284d5d81', {
            method: 'GET',
            headers: {
                'Content-type': 'jsonp; charset=UTF-8'
            }
        });
        if(response.ok) {
            return response.json();
        } else {
            throw new HTTPError(response);
        }
    } catch (exceptionError) {
        throw exceptionError;
    }
}

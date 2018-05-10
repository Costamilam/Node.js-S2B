const fetch = require('node-fetch');

(async function() {
    try {
        const responseGET = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if(responseGET.ok) {
            console.log(await responseGET.json());
        } else {
            console.log('Fail');
        }

        let responsePOST = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'request title',
                body: 'request body',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        console.log(await responsePOST.json());
    } catch (excepionError) {
        console.log(excepionError);
    }
})();

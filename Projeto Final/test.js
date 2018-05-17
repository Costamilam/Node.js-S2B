const {getJSON} = require('./requests.js');

//Request function usage
(async function() {
    try {
        console.log(await getJSON());
    } catch(exceptionError) {
        console.log(exceptionError);
    }
})();
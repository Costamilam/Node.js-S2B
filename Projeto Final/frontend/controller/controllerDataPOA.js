angular
    .module('appDataPOA', [])
    .controller('controllerDataPOA', async function() {
        this.data = await getDataPOA();
        this.teste = 'teste';
    });

async function getDataPOA() {
    if (navigator.onLine) {
        let json = [];

        for(let resource of ['c003f659-dc05-4e64-8a5a-0f730ac8cff2', 'c2da9ff7-94c8-43af-8141-d03f8d325739', '9b019d7c-1956-4cf8-bc75-9041284d5d81']) {
            json = json.concat(
                await fetch(`http://datapoa.com.br/api/action/datastore_search?resource_id=${resource}&limit=500`)
                .then(data => data.json())
                .then(dataJSON => dataJSON.result.records)
                .catch(error => error)
            );
        }

        localStorage.dataPOA = JSON.stringify(json);

        return json;
    } else if (localStorage.dataPOA) {
        return JSON.parse(localStorage.dataPOA);
    } else {
        return null;
    }
}
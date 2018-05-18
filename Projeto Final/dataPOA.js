/*const resourceId = { 
    universitiesAndColleges: 'c003f659-dc05-4e64-8a5a-0f730ac8cff2',
    federalSchools: 'c2da9ff7-94c8-43af-8141-d03f8d325739',
    stateSchools: '9b019d7c-1956-4cf8-bc75-9041284d5d81'
}*/

async function getData() {
    if (!localStorage.dataPOA) {
        if (!navigator.onLine) {
            return null;
        }

        let json = [];

        for(let resource of ['c003f659-dc05-4e64-8a5a-0f730ac8cff2', 'c2da9ff7-94c8-43af-8141-d03f8d325739', '9b019d7c-1956-4cf8-bc75-9041284d5d81']) {
            json.push(
                JSON.stringify(
                    await fetch(`http://datapoa.com.br/api/action/datastore_search?resource_id=${resource}&limit=500`)
                    .then(data => data.json())
                    .then(function(dataJSON) {
                        return dataJSON.result.records;
                    })
                    .catch(function(error) {
                        return error;
                    })
                )
            );
        }

        localStorage.dataPOA = JSON.stringify(json);
    }

    return JSON.parse(localStorage.dataJSON);
};
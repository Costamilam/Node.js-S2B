angular
    .module('example3app', [])
    .service('servicePerson', class {
        getPeople() {
            return [
                {
                    identifier: 0,
                    name: 'Guilherme',
                    age: 17
                },
                {
                    identifier: 1,
                    name: 'Leonardo',
                    age: 13
                },
                {
                    identifier: 2,
                    name: 'Maria',
                    age: 25
                }
            ];
        }
    });
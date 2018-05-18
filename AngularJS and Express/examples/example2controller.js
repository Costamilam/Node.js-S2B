function Person() {
    this.data = [
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
    ]
}


angular
    .module('appExample2', [])
    .controller('controllerExample2', Person);
angular
    .module('example3app', [])
    .controller('example3controller', ['servicePerson', function(servicePerson) {
        this.data = servicePerson.getPeople();
    }]);
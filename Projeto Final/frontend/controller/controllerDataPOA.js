angular
    .module('appDataPOA', [])
    .controller('controllerDataPOA', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
        $scope.data = [];
        $scope.objectPostUser = {};

        $scope.fetch = function() {
            for(let resource of ['c003f659-dc05-4e64-8a5a-0f730ac8cff2', 'c2da9ff7-94c8-43af-8141-d03f8d325739', '9b019d7c-1956-4cf8-bc75-9041284d5d81']) {
                $http({
                    method: 'GET', 
                    url: `http://datapoa.com.br/api/action/datastore_search?resource_id=${resource}&limit=500`, 
                    cache: $templateCache
                })
                .then(function(response) {
                    $scope.data = $scope.data.concat(response.data.result.records);
                });
            }
        }
        $scope.fetch();

        $scope.submitPostUser = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/user',
                data: $scope.objectPostUser,
                mode: 'no-cors'
            })
            .then(function(response) {
                $scope.responsePostUser = response;
                console.log($scope.responsePostUser)
            })
            .catch(error => console.log(error));
        }
    }]);
angular
    .module('appDataPOA', [])
    .controller('controllerDataPOA', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
        $scope.currentActivity = 'index';
        
        $scope.dataResponse = [];
        $scope.dataSend = {};

        $scope.dialog = document.getElementsByTagName('dialog')[0];

        $scope.getDataPOA = function() {
            dataResponse = [];
            
            for(let resource of ['c003f659-dc05-4e64-8a5a-0f730ac8cff2', 'c2da9ff7-94c8-43af-8141-d03f8d325739', '9b019d7c-1956-4cf8-bc75-9041284d5d81']) {
                $http({
                    method: 'GET', 
                    url: `http://datapoa.com.br/api/action/datastore_search?resource_id=${resource}&limit=500`, 
                    cache: $templateCache
                })
                .then(function(response) {
                    $scope.dataResponse = $scope.dataResponse.concat(response.data.result.records);
                })
                .catch(error => console.error(error));
            }
        }

        $scope.submitData = function(e) {
            e.preventDefault();

            $http({
                method: e.srcElement.method,
                url: e.srcElement.action,
                data: $scope.dataSend,
                mode: 'no-cors'
            })
            .then(function(response) {
                sessionStorage.auth = response.token;
                $scope.dataResponse = response;
                $scope.dialog.setAttribute('open', '');
            })
            .catch(error => console.log(error));
        }
    }]);
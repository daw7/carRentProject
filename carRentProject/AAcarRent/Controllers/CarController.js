angular.module('App')
.controller('Car', ['$scope', '$http', function ($scope, $http) {
    $scope.msg = "elo";
        $http.get("/Cars/getCarData")
        .success(function (result) {
            $scope.cars = result;
        })
        .error(function (result) {
            console.log("Http error");
        });

}]);
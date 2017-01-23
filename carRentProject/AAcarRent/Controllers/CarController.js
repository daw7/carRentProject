angular.module('App')
.controller('Car', ['$scope', '$http','OrderService' , function ($scope , $http,OrderService) {
    $scope.cars = "";
    $scope.changeListName = function (e) {
        OrderService.addProduct(e);
        window.location.href = "#order";
            }
    $http.get("/Cars/getCarData")
            .success(function (result) {
                $scope.cars = result;
            })
            .error(function (result) {
                console.log("Http error");
            });
}]);

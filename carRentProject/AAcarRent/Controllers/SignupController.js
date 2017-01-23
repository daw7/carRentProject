var myApp = angular.module('App');
myApp.controller('Signup', ['$scope', '$http', function ($scope, $http) {
    
    $scope.user = {}

    


    $scope.createUser = function () {
        $http({
            url: '/Registration/getUserData',
            method: "POST",
            data: $.param($scope.user),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            } 
        })
        alert("Twoje dane zostały poprawnie przesłane!");
        window.location.href = "#";
    }
}]);
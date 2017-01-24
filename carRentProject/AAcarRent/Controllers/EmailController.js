angular.module('App').controller('Email', ['$scope', '$http', function ($scope, $http) {

    $scope.mail = {}

    $scope.sendEmail = function () {
        $http({
            url: '/Emails/SendEmail',
            method: "POST",
            data: $.param($scope.mail),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }

        })
        window.location.href = "#";
        alert("Twoje zapytanie zostało wysłane!");
    }


}]);
angular.module('App')
  .controller('Order', ['$scope', '$interval', 'OrderService', '$http', function ($scope, $interval, OrderService, $http) {

      $scope.user = {};

     

      $scope.callAtTimeout = function () {
     
          $scope.cena =$scope.user.submissionDate2;
      }

      $interval(function () { $scope.callAtTimeout(); }, 2000);
        $scope.products = OrderService.getProducts();
        $scope.mail = {};
        $scope.sendEmail = function () {
            var tresc = "Imię: " + $scope.user.firstName + "\nNazwisko: " + $scope.user.secondName + "\nData odbioru: " + $scope.user.submissionDate1
            + "\nData odstawy: " + $scope.user.submissionDate2 + "\nAdres: " + $scope.user.address + "\nMiasto: " + $scope.user.city + "\nKod pocztowy: " + $scope.user.postalCode
            + "\nSamochód: " + $scope.products.brand + ", " + $scope.products.model + ", " + $scope.products.segment;

            $scope.mail = {
                name: "Zamówienie ",
                email: "wypożyczenia samochodu",
                text: tresc
            }


            $http({
                url: '/Emails/SendEmail',
                method: "POST",
                data: $.param($scope.mail),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })


            window.location.href = "#";
            alert("Twoje zamówienie zostało wysłane!");
        }
    }]);
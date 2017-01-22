angular.module('App')
.controller('Signup', ['$scope', '$http', function ($scope, $http, UserService) {

    $scope.msg = "eloleoleo";

    $scope.AddUser() = function ($scope)
    {
        UserService.addUserToDB($scope.user).then(function(user){
            console.log("DUPA"); 
        });
    }
}])   
.factory("UserService", function ($http) {
    
    var fac = {};
    fac.addUserToDB = function (user) {
        return $http({
            url: '/Registration/createNewUser',
            method: 'POST',
            data: JSON.stringify(d),
            headers: { 'content-type': 'application/json' }
        });
    };
    return fac;
});




//angular.module('App')
//.controller('Signup', ['$scope', '$http',  function ($scope, RegistrationService) {
//    $scope.msg = "elolooo";
   
//    $scope.submitText = "Save";
//    $scope.submitted = false;
//    $scope.message = '';
//    $scope.isFormValid = false;
//    $scope.User = {
//        Username: 'Andrzej',
//        Password: 'Wafel',
//        FullName: 'Chuj',
//        EmailID: 'lalala@wp.pl',
//        Gender: ''
//    };

//    $scope.$watch('f1.$valid', function (newValue) {
//        console.log("elo");
//        $scope.isFormValid = newValue;
//    });

//    $scope.SaveData = function (data) {
//        console.log("elo1");
//        if ($scope.submitText == 'Save') {
//            $scope.submitted = true;
//            $scope.message = '';

//            if ($scope.isFormValid) {
//                $scope.submitText = 'Please Wait...';
//                $scope.User = data;
//                console.log("elo11");
//                console.log(data);
//                RegistrationService.SaveFormData($scope.User).then(function (d) {
//                    alert(d);
//                    if (d == 'Success') {
//                        //have to clear form here
//                        ClearForm();
//                    }
//                    $scope.submitText = "Save";
//                });
//            }
//            else {
//                $scope.message = '';
//            }
//        }
//    }
//    function ClearForm() {
//        console.log("elo2");
//        $scope.User = {};
//        $scope.f1.$setPristine(); //here f1 is form name
//        $scope.submitted = false;
//    }
//}])
//.factory('RegistrationService', function ($http, $q) {
//    console.log("elo3");

//    var fac = {};
//    fac.SaveFormData = function (data) {
//        var defer = $q.defer();
//        $http({
//            url: '/Registration/createNewUser',
//            method: 'POST',
//            data: JSON.stringify(data),
//            headers: { 'content-type': 'application/json' }
//        }).success(function (d) {
//            // Success callback
//            defer.resolve(d);
//        }).error(function (e) {
//            //Failed Callback
//            alert('Error!');
//            defer.reject(e);
//        });
//        return defer.promise;
//    }
//    return fac;
//});



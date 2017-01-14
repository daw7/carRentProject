var App = angular.module('App', ['ngRoute']);

//App.controller('MainController', MainController);
//App.controller('LoginController', LoginController);
//App.controller('AboutController', AboutController);
App.controller('SignupController', SignupController);


App.controller('AppController', function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
});


var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when("/#/", {
            templateUrl: ""
         })
        .when("/index", {
            templateUrl: "/AAcarRent/Views/Index.html"
         })
         .when("/about", {
             templateUrl: "/AAcarRent/Views/About.html"
         })
        .when("/login", {
            templateUrl: "/AAcarRent/Views/Login.html"
        })
        .when("/signup", {
            templateUrl: "/AAcarRent/Views/Signup.html"
        })
       .otherwise({
           redirectTo: function () {
               return '/';
           }
       });
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

App.config(configFunction);



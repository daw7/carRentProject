﻿var App = angular.module('App', ['ngRoute', 'ngMaterial','ngMessages']);



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
            templateUrl: "/AAcarRent/Views/Login.html",
            controller: "MyCtrl1"
        })
        .when("/email", {
            templateUrl: "/AAcarRent/Views/Email.html",
            controller: "Email"
        })
        .when("/cars", {
            templateUrl: "/AAcarRent/Views/Cars.html",
            controller: "Car"
        })
        .when("/order", {
            templateUrl: "/AAcarRent/Views/Order.html",
            controller: "Order"
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



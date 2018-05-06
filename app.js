'use strict';

(function () {
    var app = angular.module("addressBookApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/Contact", {
            templateUrl: 'app/views/login.html',
            controller: "ContactCtrl"
        })
        .when("/login", {
            templateUrl: 'app/views/contact.html',
            controller: "ContactCtrl"
        })
        .otherwise({ redirectTo: "/Contact" })
    });
}());

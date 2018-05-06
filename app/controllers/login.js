(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'phoneService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, phoneService, $state, $stateParams) {
        $scope.login = [];

       if ($state.current.name == "login") {
            $rootScope.Title = "Create login";
            $scope.sendData = function (login) {
                $scope.IsSubmit = true;
                if ($scope.loginForm.$valid) {
                    phoneService.login(login).then(function (res) {
                        if (res.data == "created") {
                            $state.go("logins");
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };
        }
    }
})();
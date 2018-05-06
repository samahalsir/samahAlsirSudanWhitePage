'use strict';

/*var ContactCtrl = angular.module('addressBookApp', []);

ContactCtrl.controller('ContactCtrl',['$scope', '$routeParams', 
	function($scope, $routeParams){
		$scope.ContactName = "Brij Mohan";
	}]);
*/

(function () {
    var addressBookApp = angular.module("addressBookApp");

    var ContactCtrl = function ($scope, $http)
    {
    	$scope.working = 'Angular is Working';
        //common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //get all Contacte
    	var onContactGetCompleted = function(response){
    		$scope.Contacts = response.data;
            console.log($scope.Contacts);
    	}
    	

        var refresh = function(){
        	$http.get('/Contacts')
        		.then(onContactGetCompleted, onError);
        	console.log('Response received...');
        }

        refresh();
    	//end get all Contacts

        //get Contacts by Id
        var onGetByIdCompleted = function(response){
            $scope.Contact = response.data;
            console.log(response.data);
        };

        $scope.searchContact = function(id){
            $http.get('/Contact/' + id)
                    .then(onGetByIdCompleted, onError);
            console.log(id);
        };
        //end get Contact by Id

        //add new Contact
        var onAddContactCompleted = function(response){
            $scope.Contact = response.data;
            console.log(response.data);
            refresh();
        };
        $scope.addContact = function(Contact){
            $http.post('/addContact', Contact)
                    .then(onAddContactCompleted, onError);
            console.log("Contact >>> >> "+Contact);
        };
        //end add new Contact

        //delete Contact
        $scope.deleteContact = function(id){
            $http.delete('/deleteContact/' + id)
                .then(onContactDeleteCompleted,  onError);
            console.log(id);
        };

        var onContactDeleteCompleted = function(response){
            $scope.Contact = response.data;
            console.log(response.data);
            refresh();
        };
        //end delete Contact

        //update Contact
        $scope.updateContact = function(Contact){
            $http.put("/updateContact", Contact)
                .then(onUpdateContactCompleted, onError);
                    console.log(Contact);
        };

        var onUpdateContactCompleted = function(response){
            $scope.Contact = null;//response.data;
            console.log(response.data);
            refresh();
        };
        //end update Contact
    }
    addressBookApp.controller('ContactCtrl', ContactCtrl);
}());
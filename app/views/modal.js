angular.module('addressBookApp', ['ui.bootstrap']);

var modalControl = function ($scope, $modal, $log) {

  var key = 1000;
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (Contact) {

    var modalInstance = $modal.open({
      templateUrl: 'editContactmodal.html',
      controller: ContactCtrl,
      resolve: {
        items: function () {
          return $scope.Contacts;
        },
        key: function() {return key; }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};
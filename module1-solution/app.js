(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.itemsString = "";
  $scope.messageFromLunchChecker = "";

  $scope.checkLunch = function()
  {
    $scope.messageFromLunchChecker = $scope.itemsString !== "" ? $scope.itemsString.split(',').length <= 3 ? "Enjoy!" : "Too much!" : "Please enter data first";
  }
}

})();

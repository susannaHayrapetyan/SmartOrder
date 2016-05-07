angular
.module('smartOrder.controllers')
.controller('ItemsCtrl', function($scope, ItemsSrv) {
  $scope.items = ItemsSrv.get("1");
})

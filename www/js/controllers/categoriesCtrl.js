angular
.module('smartOrder.controllers')
.controller('CategoriesCtrl', function($scope, CategoriesSrv) {
  $scope.categories = CategoriesSrv.get();
})
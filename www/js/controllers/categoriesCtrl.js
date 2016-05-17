angular
.module('smartOrder.controllers')
.controller('CategoriesCtrl', function($scope, CategoriesSrv, SocketSrv) {
  $scope.categories = CategoriesSrv.get();

  SocketSrv.connect();
  SocketSrv.on('connected', function(){
    alert("You're connected");
  })
})
angular
.module('smartOrder.controllers')
.controller('CategoriesCtrl', function($scope) {
  $scope.categories = [
    { name: 'Pizza',   icon: 'ion-pizza' },
    { name: 'Hot Dishes',   icon: 'ion-android-restaurant' },
    { name: 'Salad',   icon: 'ion-ios-nutrition' },
    { name: 'Coffee',  icon: 'ion-coffee' },
    { name: 'Desserts',icon: 'ion-icecream' },
    { name: 'Fruits',  icon: 'ion-aperture' },
    { name: 'Wine',    icon: 'ion-wineglass'},
    { name: 'Beer',    icon: 'ion-beer'},
    { name: 'Juice',   icon: 'ion-ios-pint'}
  ];
})
.controller('ItemsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ItemCtrl', function($scope, $stateParams) {
});

angular
.module('smartOrder.services')
.factory('ItemsSrv', function() {
  
  items = [
    { id: '1', name: 'Ֆրապպե',      image: 'ion-pizza'},
    { id: '2', name: 'Գլյասսե', image: 'ion-android-restaurant' },
    { id: '3', name: 'Կապուչիտա',      image: 'ion-ios-nutrition' }
  ];

  return {
    get: function(categoryId){
      return items;
    }
  }
})

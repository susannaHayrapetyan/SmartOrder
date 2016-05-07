angular
.module('smartOrder.services', [])
.factory('CategoriesSrv', function() {
  
  categories = [
    { id: '1', name: 'Պիցցա',        icon: 'ion-pizza'},
    { id: '2', name: 'Տաք ուտեստներ', icon: 'ion-android-restaurant' },
    { id: '3', name: 'Աղցան',        icon: 'ion-ios-nutrition' },
    { id: '4', name: 'Սուրճ',         icon: 'ion-coffee' },
    { id: '5', name: 'Աղանդեր',       icon: 'ion-icecream' },
    { id: '6', name: 'Միրգ',         icon: 'ion-aperture' },
    { id: '7', name: 'Գինի',         icon: 'ion-wineglass'},
    { id: '8', name: 'Գարեջուր',      icon: 'ion-beer'},
    { id: '9', name: 'Հյութ',         icon: 'ion-ios-pint'}
  ];

  return {
    get: function(){
      return categories;
    }
  }
})

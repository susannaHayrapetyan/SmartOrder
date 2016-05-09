angular
.module('smartOrder.services')
.factory('ItemsSrv', function() {
  
  items = [
    { id: '1', name: 'Ֆրապպե',   coast: '700', prepare_time: '4'},
    { id: '2', name: 'Գլյասսե',    coast: '1000', prepare_time: '7'},
    { id: '3', name: 'Կապուչիտա', coast: '1400', prepare_time: '12'}
  ];

  return {
    get: function(categoryId){
      return items;
    }
  }
})

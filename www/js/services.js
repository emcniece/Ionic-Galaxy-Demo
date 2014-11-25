angular.module('starter.services', [])

.factory('Vehicles', function($rootScope, $http) {
  // Might use a resource here that returns a JSON array

  return {
    all: function() {
      return $http.get('/inventory-data.json');

    },
    get: function(vehicleId) {
      // Simple index lookup
      var vehicle = false;
      angular.forEach($rootScope.vehicles, function(dealer, key){
        console.log( dealer[vehicleId], typeof(dealer[vehicleId]) );
        if(typeof(dealer[vehicleId]) === 'object'){
          vehicle = dealer[vehicleId];
        }
      });

      return vehicle;

    }
  };
})

.filter('cut', function () {
  return function (value, wordwise, max, tail) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;
      if (value.length <= max) return value;

      value = value.substr(0, max);
      if (wordwise) {
          var lastspace = value.lastIndexOf(' ');
          if (lastspace != -1) {
              value = value.substr(0, lastspace);
          }
      }

      return value + (tail || ' …');
  }
})
;

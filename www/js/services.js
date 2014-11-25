angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
})

.factory('Vehicles', function($http) {
  // Might use a resource here that returns a JSON array

  var vehicles = [];
  $http.get('/inventory-data.json').success (function(data){
    console.log(data);
    vehicles = data;
  });
  

  return {
    all: function() {
      return vehicles;
    },
    get: function(vehicleId) {
      // Simple index lookup
      return vehicles[vehicleId];
    }
  };
})

;

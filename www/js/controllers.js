angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, Vehicles) {

	console.log( Vehicles.all() );

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

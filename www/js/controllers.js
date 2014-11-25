angular.module('starter.controllers', [])

.controller('DashCtrl', function($rootScope, $scope, Vehicles) {

	$scope.numCols = 3;
	$scope.vehicleData = [];

	var loadVehicles = function(data, status){
		$scope.dealers = data;
		$rootScope.vehicles = data;

		var count = 1, row = 0;
		var tmpArr = [];

		angular.forEach($scope.dealers[0], function(vehicle, key){
			tmpArr.push(vehicle);
			if( (count > 0) && (count % $scope.numCols === 0) ){
				$scope.vehicleData.push(tmpArr);
				tmpArr = [];
				row++;
			}
			count++;
		});
		console.log( $scope.vehicleData);
	};

	Vehicles.all().success(loadVehicles);

})

.controller('VehicleDetailCtrl', function($scope, $stateParams, Vehicles) {
  console.log($stateParams);
  $scope.vehicle = Vehicles.get($stateParams.vehicleId);
  console.log($scope.vehicle);
})


.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

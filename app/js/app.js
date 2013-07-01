todo = angular.module('todo', []);

todo.controller('mainCtrl', function($scope) {
	$scope.task = {
		name : '',
		complete: false
	};

	$scope.tasks = [];

	$scope.addTask = function() {
		$scope.tasks.push($scope.task);
		$scope.task = { 
			name : '',
			complete: false
		};
	}

});

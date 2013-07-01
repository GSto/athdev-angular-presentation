app = angular.module('todo', []);

app.controller('mainCtrl', function($scope) {
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

	$scope.tasksCompleted = function() {
		return _.filter($scope.tasks, function(task) {
			return task.complete;
		}).length;
	}

});

app.directive('percentage', function() {
	return {
		restrict : 'E',
		templateUrl : 'templates/percentage.html',
		scope: {
			complete : '=',
			total: '='
		},
		controller: function($scope) {
			$scope.getPercentage = function() {
				if($scope.total == 0) {
					return 0;
				}
				
				return ($scope.complete / $scope.total) * 100;
			}
		}
	};
});

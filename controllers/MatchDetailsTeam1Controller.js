matchObj.controller("MatchDetailsTeam1Controller",['$scope','$http','$state','$stateParams',function($scope,$http,$state,$stateParams){


			//This controller is to display innings of team1
			$scope.deliveries=$scope.$parent.team1;  //Fetch the data from parent Controller,i.e MatchDetails
			$scope.currentPage=1;
			$scope.itemsPerPage=6;  //Display 6 items as 6 balls in an over.
			 $scope.maxSize = 10;

			$scope.totalTeam1Deliveries=$scope.deliveries.length;
		}]);

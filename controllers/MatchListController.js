var matchObj = angular.module("ipl.controllers",['ui.bootstrap','ui.router'])
		.controller("MatchListController",['$scope','$http','$state','$stateParams','dataServices','$location','Papa',function($scope,$http,$state,$stateParams,dataServices,$location,Papa){   
			  $scope.currentPage = 1;   //Starting Page visible
			  $scope.maxSize = 10;      //Display Maximum of 10 items on Pagination
			  $scope.itemsPerPage=6;   //Display Maximum of 6 items on each page
		          $scope.searchKeyword='';
			  $scope.loadAllIplMatches = function(){
			    	$scope.matches = [];
				dataServices.getAllIplMatches().then(function(success){
					var results = Papa.Papa.parse(success.data,{header:true});  //Give csv string to PapaParse Lib 
					$scope.matches= results.data.splice(0,results.data.length-1);                               //fetch the resultant json array
					$scope.totalIplMatches=$scope.matches.length-1;		    //calculate the totalIplMatches to render	
				},function(error){});     //Error case is not handled due to time limitation
			  };

			  $scope.loadAllIplMatches(); 
			  
			
			//Go to Match Details, send Id of match, and complete matchObj
			 $scope.goToMatchDetails=function(index,matchobj){
				var goTo=Number(index)+Number(($scope.currentPage-1) * $scope.itemsPerPage)+1; 
				$state.go('matchDetails',{id:goTo,matchObj:matchobj});
			};

		}]);

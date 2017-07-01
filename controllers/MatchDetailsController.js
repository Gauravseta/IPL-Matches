matchObj.controller("MatchDetailsController",['$scope','$http','$state','$stateParams','dataServices','Papa','$window','$location',function($scope,$http,$state,$stateParams,dataServices,Papa,$window,$location){

			$scope.matchObj=$state.params.matchObj;
			$scope.isDataLoading=true;  //Can implement Progress loader,but as of now showing text in a div
			$scope.isDataLoaded=false;

			//To move to previous page
			$scope.goBack=function(){
				$location.url("/matchList");
			};

			//Fetch all delveries, find all deliveries with received Id, sort according to team1 and team2
			// Using PapaParse to convert .csv to JSON
			dataServices.getAllDeliveries().then(function(success){
					
				var results = Papa.Papa.parse(success.data,{header:true});
				$scope.deliveries= results.data;
				$scope.team1=[];
				$scope.team2=[];

				for(var index in $scope.deliveries){
					if(($state.params.id==$scope.deliveries[index].match_id)&&($scope.deliveries[index].batting_team==$scope.matchObj.team1)){
						
						$scope.team1.push($scope.deliveries[index]);					
					}
					if(($state.params.id==$scope.deliveries[index].match_id)&&($scope.deliveries[index].batting_team==$scope.matchObj.team2)){
						
						$scope.team2.push($scope.deliveries[index]);					
					}
				}
				$scope.isDataLoading=false;
				$scope.isDataLoaded=true;
				$location.url("/matchDetails/team1");  //By default show team1 innings
				
			});


		}]);

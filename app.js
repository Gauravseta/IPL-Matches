angular.module("iplApp",['papa-promise','ipl.controllers','ipl.services','ui.router','ui.bootstrap'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise("/matchList");
			$stateProvider.state('matchList',{
				url:"/matchList",
				templateUrl:"partials/matchList.view.html",
				controller:"MatchListController"
			})
			.state('matchDetails',{
				url:"/matchDetails",
				params: {id:null,matchObj:null},
				templateUrl:"partials/matchDetails.view.html",
				controller:"MatchDetailsController"
			})
			.state('matchDetails.team1',{
				url:"/team1",
				templateUrl:"partials/matchDetails.team1.view.html",
				controller:"MatchDetailsTeam1Controller"
			})
			.state('matchDetails.team2',{
				url:"/team2",
				templateUrl:"partials/matchDetails.team2.view.html",
				controller:"MatchDetailsTeam2Controller"
			});
			
		})
		.controller("IplController",['$scope','Papa','$http','dataServices',function($scope,Papa,$http,dataServices){
			$scope.obj={};		
		}]);
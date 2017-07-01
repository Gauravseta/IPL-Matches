angular.module("ipl.services",['papa-promise'])
		.factory("dataServices",function($http,Papa){
			var obj=this;
	
			/** util to Fetch All Past Matches **/ 
			obj.getAllIplMatches=function(){
				return $http({url:"data/matches.csv"});
			};
	
			/** util to Fetch All Deliveries **/ 
			obj.getAllDeliveries=function(){
				return $http({url:"data/deliveries.csv"});	
			};
			
			return obj;	
		});

var app = angular.module('madLibs', []);
app.controller('madLibsCtrl', function($scope) {
    $scope.name = "Name";
    $scope.jobTitle = "Job title";
    $scope.tediousTask = "Tedious task";
    $scope.dirtyTask = "Dirty task";
    $scope.celebrity = "Celebrity";
    $scope.uselessSkill = "Useless skill";
    $scope.obnoxiousCelebrity = "Obnoxious celebrity";
    $scope.hugeNumber = "Huge number";
    $scope.adjective = "Adjective";
    $scope.pronoun = "she";
    $scope.possessive = "her";
    $scope.changeSex = function(sex){
    	if (sex === "female"){
    		$scope.pronoun = "she";
    		$scope.possessive = "her";    		
    	} else {
    		$scope.pronoun = "he";
    		$scope.possessive = "his";    		
    	}
    }
});
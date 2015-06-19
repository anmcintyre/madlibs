var app = angular.module('madLibs', ['ngMessages']);
app.controller('madLibsCtrl', function($scope) {
    $scope.pronoun = "she";
    $scope.possessive = "her";
    $scope.showInput = true;

    $scope.changeSex = function(sex){
    	if (sex === "female"){
    		$scope.pronoun = "she";
    		$scope.possessive = "her";    		
    	} else {
    		$scope.pronoun = "he";
    		$scope.possessive = "his";    		
    	}
    }

    $scope.submit = function(){
        if ($scope.myForm.$valid){            
            $scope.showInput = !$scope.showInput;
            console.log("the form is valid");
        } else {
            console.log("the form is invalid");
        }

    }

    $scope.startOver = function(){
        $scope.showInput = !$scope.showInput;
        $scope.name = "";
        $scope.jobTitle = "";
        $scope.tediousTask = "";
        $scope.dirtyTask = "";
        $scope.celebrity = "";
        $scope.uselessSkill = "";
        $scope.obnoxiousCelebrity = "";
        $scope.hugeNumber = "";
        $scope.adjective = "";
        $scope.myForm.$setPristine();
    }
});
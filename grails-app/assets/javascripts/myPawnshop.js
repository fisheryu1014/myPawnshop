/**
 * Created by fisher on 7/20/15.
 */

var myPawnshopApp = angular.module("myPawnshopApp", []);
myPawnshopApp.controller('MainCtrl', ["$scope", function($scope){
    $scope.helloText = "Hello Angrails Demo!";
}]);
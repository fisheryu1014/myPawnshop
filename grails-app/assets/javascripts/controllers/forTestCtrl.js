/**
 * Created by fisher on 7/20/15.
 */

myPawnshopApp.controller("forTestCtrl", ["$scope", function($scope){
    $scope.item_list = [{id:1, value:"value1"}, {id:2, value:"value2"}, {id:3, value:"value3"}];
    $scope.selectedList = [];
    $scope.addToSelect = function(item) {
        if (item && $scope.selectedList.indexOf(item) < 0) {
            $scope.selectedList.push(item);
            $scope.item_list.splice($scope.item_list.indexOf(item), 1);
        }
    };

    $scope.removeSelected = function(item) {
        $scope.selectedList.splice($scope.selectedList.indexOf(item), 1);
        $scope.item_list.push(item);
    }
}]);
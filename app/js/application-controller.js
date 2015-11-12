Portfolio.controller("ApplicationController", ["$scope", "$routeParams", "$location", function($scope, $routeParams, $location) {

  $scope.activeRoute = function(level, name) {
    var routeComponents = $location.path().split("/");

    if (routeComponents[level + 1] === name) {
      return "selected";
    }

    return "";
  };
}]);
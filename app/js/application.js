$(document).foundation();
$(document).foundation('equalizer', 'reflow');

var Portfolio = angular.module("Portfolio", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "/html/partials/_home.html",
      controller: "ApplicationController"
    }).
    when("/portfolio/citrine", {
      templateUrl: "/html/partials/portfolio/_citrine.html",
      controller: "ApplicationController"
    }).
    when("/portfolio/noble-brewer", {
      templateUrl: "/html/partials/portfolio/_noble-brewer.html",
      controller: "ApplicationController"
    }).
    when("/portfolio/urx", {
      templateUrl: "/html/partials/portfolio/_urx.html",
      controller: "ApplicationController"
    }).
    when("/about-me", {
      templateUrl: "/html/partials/_about-me.html",
      controller: "ApplicationController"
    }).
    otherwise({
      redirectTo: "/"
    });
}])

.run();
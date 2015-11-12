$(document).foundation({
  "magellan-expedition": {
    active_class: 'active', // specify the class used for active sections
    threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
    destination_threshold: 400, // pixels from the top of destination for it to be considered active
    throttle_delay: 0, // calculation throttling to increase framerate
    fixed_top: 100, // top distance in pixels assigend to the fixed element on scroll
    offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
  }
});

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
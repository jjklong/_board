var myApp = angular.module('myApp', ['ngRoute']);

myApp.directive("theSong", function(){
  return function(scope, element, attrs){
    element.bind("timeupdate", function(){
      scope.timeElapsed = element[0].currentTime;
      scope.$apply();
    });
  };
});

myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: 'pages/bb.html'
    })
    // .when('/bb',{
    //   templateUrl: ''
    // })
    .otherwise({
      redirectTo: '/'
    });
  });



  //REFERENCED FILES
  // FOR "theSong" DIRECTIVE http://stackoverflow.com/questions/17257435/ng-model-for-html5-audio-element-in-angularjs - http://jsfiddle.net/ASjRP/20/

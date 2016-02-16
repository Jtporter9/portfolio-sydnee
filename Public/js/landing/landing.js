angular.module('portfolio').controller('landingCtrl', function($scope, mainService) {

  $scope.headShot = mainService.headShot;
  $scope.intro = mainService.intro;
  $scope.projects = mainService.projects;
  $scope.bioTitle = mainService.bioTitle;
  $scope.p1 = mainService.p1;
  $scope.p2 = mainService.p2;
  $scope.p3 = mainService.p3;
  $scope.p4 = mainService.p4;
  $scope.p5 = mainService.p5;
});

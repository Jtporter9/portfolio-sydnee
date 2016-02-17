angular.module('portfolio').controller('adminCtrl', function($scope, mainService) {

  $scope.intro = mainService.intro;
  $scope.headShot = mainService.headShot;
  $scope.projects = mainService.projects;
  $scope.bioTitle = mainService.bioTitle;
  $scope.p1 = mainService.p1;
  $scope.p2 = mainService.p2;
  $scope.p3 = mainService.p3;
  $scope.p4 = mainService.p4;
  $scope.p5 = mainService.p5;

  $scope.showTrash = function() {
    $scope.showTrashCan = !$scope.showTrashCan;
  };
  
  $scope.showAddProjBox = function() {
    $scope.showAddProj = !$scope.showAddProj;
  };

  $scope.addNewProj = function() {
    $scope.newProj.number = $scope.projects.length + 1;
    mainService.projects.push($scope.newProj);
    $scope.showAddProjBox();
  };
});

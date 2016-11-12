function MainController($scope) {
  $scope.isAwesome = 'Kerry';
}

angular
  .module('app')
  .controller('MainController', MainController);
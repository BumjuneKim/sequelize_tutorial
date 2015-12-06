ngModule.controller('containerCtrl', ['$scope', '$state',
  function($scope, $state) {
    $scope.init = function() {
      $state.go('main');
    };

    $scope.closeAlert = function(index) {
      $scope.alertMessages.splice(index, 1);
    };

    $scope.init();
  }]);
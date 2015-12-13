ngModule.controller('mainCtrl', ['$scope',
  function($scope) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      Data.pages = ['publisher', 'books', 'user', 'rent'];
    };

    $scope.init();
  }]);
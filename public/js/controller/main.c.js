ngModule.controller('mainCtrl', ['$scope',
  function($scope) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      Data.pages = ['publisher', 'books', 'rent', 'return', 'user', 'history'];
    };

    $scope.init();
  }]);
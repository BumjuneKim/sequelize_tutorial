ngModule.controller('userCtrl', ['$scope', 'userService', 'alertService',
  function($scope, userService, alertService) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      userService.getUsers().then(function(response) {
        Data.userList = response.data;
        console.log(Data.userList);
      });
    };

    $scope.init();

    function addNewUser() {
      if (!Data.newUsername)
        return alertService.addMessage({type: 'danger', content: '유저 이름을 꼭 입력해주세요'});

      userService.addNewUser({username: Data.newUsername}).then(function(response) {
        Data.userList.push(response.data);
      });
    }

    Func.addNewUser = addNewUser;
  }]);
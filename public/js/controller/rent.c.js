ngModule.controller('rentCtrl', ['$scope', 'bookService', 'userService', 'rentService', 'alertService',
  function($scope, bookService, userService, rentService, alertService) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      bookService.getBookList({}).then(function(response) {
        Data.bookList = response.data;

        return userService.getUsers();
      }).then(function(response) {
        Data.userList = response.data;

        return rentService.getRentHistories();
      }).then(function(response) {
        Data.rentHistories = response.data;
        console.log(Data.rentHistories);
      });

    };

    $scope.init();

    function rentBook() {
      if (!Data.book_id)
        return alertService.addMessage({type: 'danger', content: '책을 꼭 선택하세요'});
      if (!Data.user_id)
        return alertService.addMessage({type: 'danger', content: '유저를 꼭 선택하세요'});

      rentService.rentBookToUser({book_id: Data.book_id, user_id: Data.user_id}).then(function() {
        window.location.reload(true);
      });
    }

    Func.rentBook = rentBook;
  }]);
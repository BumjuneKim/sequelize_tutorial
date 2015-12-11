ngModule.controller('booksCtrl', ['$scope', '$state', 'pubService', 'bookService', 'alertService',
  function($scope, $state, pubService, bookService, alertService) {
    var Data = $scope.data = {}
      , Func = $scope.func = {};

    $scope.init = function() {
      Data.pub_id = +$state.params.pub_id;
      Data.newBook = {};

      pubService.getPublishers().then(function(response) {
        Data.publisherList = response.data;
        if (!Data.pub_id)
          return;

        bookService.getPublisherBooks({pub_id: Data.pub_id}).then(function(response) {
          Data.publisher = response.data;
          console.log(Data.publisher);
        });
      });

      bookService.testRawQuery({}).then(function(response) {

      });
    };

    $scope.init();

    function changePublisher() {
      $state.go('main.books', {pub_id: Data.pub_id});
    }

    function addNewBook() {
      if (!Data.newBook.pub_id || !Data.newBook.stock || !Data.newBook.author || !Data.newBook.title)
        return alertService.addMessage({type: 'danger', content: '책을 등록하기 위해 정보를 모두 입력하세요'});

      if (!window.confirm(Data.newBook.title + ' 책을 등록하시겠습니까?')) return;

      bookService.addNewBook({
        pub_id: Data.newBook.pub_id,
        title: Data.newBook.title,
        author: Data.newBook.author,
        stock: Data.newBook.stock
      }).then(function(response) {
        var result = response.data;

        if (result.pub_id == Data.pub_id)
          Data.bookList.push(result);
      });
    }

    Func.changePublisher = changePublisher;
    Func.addNewBook = addNewBook;
  }]);
ngModule.factory('pubService', ['$http', 'urlService',
  function($http, urlService) {
    var PREFIX = '/api/seq_ex/publisher';

    return {
      getPublishers: function() {
        return $http.get(PREFIX);
      },
      addNewPublisher: function(options) {
        return $http.post(PREFIX, options);
      },
      updatePublisher: function(options) {
        return $http.put(PREFIX + '/' + options.pub_id, options);
      },
      deletePublisher: function(options) {
        return $http.delete(PREFIX + '/' + options.pub_id);
      }
    };
  }]);

ngModule.factory('bookService', ['$http', 'urlService',
  function($http, urlService) {
    var PREFIX = '/api/seq_ex/book';

    return {
      addNewBook: function(options) {
        return $http.post(PREFIX, options);
      },
      getPublisherBooks: function(options) {
        return $http.get(PREFIX + urlService.serialize(options));
      },
      testRawQuery: function(options) {
        return $http.get(PREFIX + '/test' + urlService.serialize(options));
      },
      getBookList: function(options) {
        return $http.get(PREFIX + '/list' + urlService.serialize(options));
      }
    };
  }]);

ngModule.factory('userService', ['$http', 'urlService',
  function($http, urlService) {
    var PREFIX = '/api/seq_ex/user';

    return {
      getUsers: function() {
        return $http.get(PREFIX);
      },
      addNewUser: function(options) {
        return $http.post(PREFIX, options);
      }
    };
  }]);

ngModule.factory('rentService', ['$http', 'urlService',
  function($http, urlService) {
    var PREFIX = '/api/seq_ex/rent';

    return {
      getRentHistories: function() {
        return $http.get(PREFIX);
      },
      rentBookToUser: function(options) {
        return $http.post(PREFIX, options);
      }
    };
  }]);


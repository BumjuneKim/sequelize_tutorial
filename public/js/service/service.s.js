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
      }
    };
  }]);
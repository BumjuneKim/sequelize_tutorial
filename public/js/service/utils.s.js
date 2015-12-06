ngModule.factory('alertService', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    $rootScope.alertMessages = [];

    function removeMessage(message) {
      message.show = false;
      $timeout(function() {
        $rootScope.alertMessages = _.without($rootScope.alertMessages, message);
      }, 10);
    }

    return {
      removeMessage: function(message) {
        removeMessage(message);
      },
      addMessage: function(message) {
        message.show = false;
        $rootScope.alertMessages.push(message);
        $timeout(function() {
          message.show = true;
        }, 500);
        $timeout(function() {
          removeMessage(message);
        }, 4400)
      },
      removeMessageByIndex: function(index) {
        removeMessage($rootScope.alertMessages[index]);
      }
    };
  }]);

ngModule.factory('spinService', ['$rootScope',
  function($rootScope) {
    $rootScope.nowLoading = false;

    return {
      setNowLoading: function(value) {
        $rootScope.nowLoading = value;
      }
    };
  }]);

ngModule.factory('urlService', [
  function() {
    return {
      serialize: function(json) {
        var queryItems = [];

        for (var key in json) {
          if (json.hasOwnProperty(key)) {
            queryItems.push(key + '=' + json[key]);
          }
        }
        var queryItemString = queryItems.join('&');
        return _.isEmpty(queryItemString) ? '' : '?' + queryItemString;
      }
    };
  }]);

ngModule.factory('httpErrorInterceptor', ['$q', 'alertService',
  function($q, alertService) {
    return {
      'responseError': function(response) {
        if (response.status >= 400 && response.status < 600) {
          alertService.addMessage({type: 'danger', content: response.data.userMessage || 'Error occurred!(http interceptor)'});
        }
        return $q.reject(response);
      }
    };
  }]);
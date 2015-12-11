'use strict';

var ngModule = angular.module('mainApp',
  ['ui.router',
   'ui.bootstrap',
   'ngAnimate']);

/** config **/
ngModule.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$tooltipProvider',
  function($stateProvider, $urlRouterProvider, $httpProvider, $tooltipProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'tpl/main.html',
        controller: 'mainCtrl'
      })
      .state('main.publisher', {
        url: '/publisher',
        templateUrl: 'tpl/publisher.html',
        controller: 'pubCtrl'
      })
      .state('main.books', {
        url: '/books?pub_id',
        templateUrl: 'tpl/books.html',
        controller: 'booksCtrl'
      });

    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('httpErrorInterceptor');
    $tooltipProvider.options({
      animation: false,
      appendToBody: true
    });
  }
]);

/** filter & directive **/
ngModule.filter('replace', function() {
    return function(input, datum, key, valueKey, nullValue) {
      input = input || '';
      var obj = _.find(datum, function(data) {
        return data[key] === input;
      });
      if (!obj) {
        if (nullValue) {
          return nullValue;
        }
        return input;
      }
      return obj[valueKey];
    };
  }
);

ngModule.filter('helper', function() {
  return function(input, key) {
    input = input || '';
    var helper = {
      vip_user_admin_by_mail: {
        Y: 'Email Noti',
        N: 'No Email Noti'
      },
      vip_user_admin_by_push: {
        Y: 'Push Noti',
        N: 'No Push Noti'
      }
    };

    var c = helper[key];
    if (c) {
      return c[input];
    } else {
      return input;
    }
  };
});

ngModule.directive('validNumber', function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      if(!ngModelCtrl)
        return;

      ngModelCtrl.$parsers.push(function(val) {
        if (angular.isUndefined(val))
          val = '';

        var clean = val.replace( /[^0-9]+/g, '');
        if (val !== clean) {
          ngModelCtrl.$setViewValue(clean);
          ngModelCtrl.$render();
        }
        return clean;
      });

      element.bind('keypress', function(event) {
        if(event.keyCode === 32)
          event.preventDefault();
      });
    }
  };
});

ngModule.directive('validPointNumber', function() {
  return {
    require: '?ngModel',
    link: function(scope, element, attrs, ngModelCtrl) {
      if(!ngModelCtrl)
        return;

      ngModelCtrl.$parsers.push(function(val) {
        if (angular.isUndefined(val))
          val = '';

        var clean = val.replace(/[^0-9\.]+/g, '')
          , decimalCheck = clean.split('.');

        if(!angular.isUndefined(decimalCheck[1])) {
          decimalCheck[1] = decimalCheck[1].slice(0, 4);
          clean = decimalCheck[0] + '.' + decimalCheck[1];
        }

        if (val !== clean) {
          ngModelCtrl.$setViewValue(clean);
          ngModelCtrl.$render();
        }

        return clean;
      });

      element.bind('keypress', function(event) {
        if(event.keyCode === 32)
          event.preventDefault();
      });
    }
  };
});


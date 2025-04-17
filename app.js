angular.module('public', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/signup');

    $stateProvider
      .state('public.signup', {
        url: '/signup',
        templateUrl: 'src/public/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl'
      })
      .state('public.myinfo', {
        url: '/myinfo',
        templateUrl: 'src/public/myinfo/myinfo.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl'
      });
  }]);

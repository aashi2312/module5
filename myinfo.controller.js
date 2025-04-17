(function () {
  'use strict';

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserService'];

  function MyInfoController(UserService) {
    var vm = this;
    vm.user = UserService.getUser();
    vm.menuItem = UserService.getFavoriteMenuItem();
  }
})();

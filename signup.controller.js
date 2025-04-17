(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];

  function SignUpController(MenuService, UserService) {
    var vm = this;
    vm.user = {};
    vm.saved = false;
    vm.invalidMenu = false;

    // Validate menu number
    vm.validateMenuNumber = function () {
      MenuService.getMenuItem(vm.user.menuNumber)
        .then(function (response) {
          if (response) {
            vm.invalidMenu = false;
            vm.menuItem = response;
          } else {
            vm.invalidMenu = true;
          }
        });
    };

    // Submit form and save user data
    vm.submit = function () {
      if (!vm.invalidMenu) {
        UserService.saveUser(vm.user, vm.menuItem);
        vm.saved = true;
      }
    };
  }
})();

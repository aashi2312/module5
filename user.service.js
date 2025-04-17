(function () {
  'use strict';

  angular.module('common')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var user = null;
    var menuItem = null;

    service.saveUser = function (userData, favoriteItem) {
      user = userData;
      menuItem = favoriteItem;
    };

    service.getUser = function () {
      return user;
    };

    service.getFavoriteMenuItem = function () {
      return menuItem;
    };
  }
})();

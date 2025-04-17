(function () {
  'use strict';

  angular.module('common')
    .service('MenuService', MenuService);

  MenuService.$inject = ['$http'];

  function MenuService($http) {
    var service = this;

    service.getMenuItem = function (menuNumber) {
      var category = menuNumber.charAt(0).toUpperCase();
      var index = parseInt(menuNumber.slice(1)) - 1;
      var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category}/menu_items/${index}.json`;

      return $http.get(url).then(function (response) {
        return response.data;
      }).catch(function () {
        return null;
      });
    };
  }
})();

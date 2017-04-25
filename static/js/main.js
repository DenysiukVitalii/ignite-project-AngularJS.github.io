var app = angular.module("KETapp", ['smoothScroll']);

var width = window.innerWidth;

app.controller('headerCtrl', ['$scope', function ($scope) {
    $scope.itemsMenu = ['home', 'services', 'portfolio', 'about', 'news', 'contact'];
    $scope.isClick = false;

    $scope.removeActive = function (link) {
      $scope.firstLink = document.querySelector("#menu-list li:first-child a");
      if (width > 768) {
        if (link !== $scope.itemsMenu[0]) {
          if (!$scope.isClick) {
            $scope.firstLink.classList.add('noborder');
            $scope.isClick = true;
          }
        } else {
          $scope.firstLink.classList.remove('noborder');
          $scope.isClick = false;
        }
      }
    }

    $scope.showMenu = function() {
      var mobileMenu = document.querySelector("#menu-list");
      mobileMenu.classList.toggle('show-menu');
    }

}]);

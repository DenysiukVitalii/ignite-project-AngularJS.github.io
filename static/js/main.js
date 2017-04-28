var app = angular.module("KETapp", ['smoothScroll']);

var width = window.innerWidth;


app.controller('headerCtrl', ['$scope', function ($scope) {
    $scope.itemsMenu = ['home', 'services', 'portfolio', 'about', 'news', 'contact'];
    $scope.isClick = false;

    $scope.removeActive = function (link) {
      var firstLink = document.querySelector("#menu-list li:first-child a");
      var portfolio = document.querySelector("#menu-list li:nth-child(3) a");
      if (width > 768) {
        if (link !== $scope.itemsMenu[0]) {
          if (!$scope.isClick) {
            firstLink.classList.add('noborder');
            $scope.isClick = true;
          }
        } else {
          firstLink.classList.remove('noborder');
          portfolio.classList.add('noborder');
          $scope.isClick = false;
        }
      }
    }

    $scope.showMenu = function() {
      var mobileMenu = document.querySelector("#menu-list");
      mobileMenu.classList.toggle('show-menu');
    }

}]);

app.controller('homeCtrl', ['$scope', function ($scope) {

    $scope.activePortfolio = function () {
      var firstLink = document.querySelector("#menu-list li:first-child a");
      var portfolio = document.querySelector("#menu-list li:nth-child(3) a");
      firstLink.classList.add('noborder');
      portfolio.classList.add('link-active');
      portfolio.classList.remove('noborder');
    }

}]);

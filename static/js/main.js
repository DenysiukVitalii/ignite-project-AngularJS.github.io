var app = angular.module("KETapp", ['smoothScroll']);

var width = window.innerWidth;
var model = {
  itemsMenu : ['home', 'services', 'portfolio', 'about', 'news', 'contact'],
  workers: [{name: "John Doe", position: "Team Lead", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi.",
             img: "static/img/worker1.jpg", socialNetworks: [{name: "facebook", link: "https://www.facebook.com/"}, {name: "twitter", link: "https://twitter.com"}, {name: "google", link: "https://plus.google.com/"}, {name: "dribbble", link: "https://dribbble.com/"}]},
            {name: "Carl Graimes", position: "Back-End Developer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi.",
             img: "static/img/worker2.jpg", socialNetworks: [{name: "facebook", link: "https://www.facebook.com/"}, {name: "twitter", link: "https://twitter.com"}, {name: "google", link: "https://plus.google.com/"}, {name: "dribbble", link: "https://dribbble.com/"}]},
            {name: "Dayve Johnson", position: "Graphic Designer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi.",
             img: "static/img/worker3.jpg", socialNetworks: [{name: "facebook", link: "https://www.facebook.com/"}, {name: "twitter", link: "https://twitter.com"}, {name: "google", link: "https://plus.google.com/"}, {name: "dribbble", link: "https://dribbble.com/"}]},
            {name: "Mike Wahlberg", position: "Front-End Developer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam excepturi.",
             img: "static/img/worker4.jpg", socialNetworks: [{name: "facebook", link: "https://www.facebook.com/"}, {name: "twitter", link: "https://twitter.com"}, {name: "google", link: "https://plus.google.com/"}, {name: "dribbble", link: "https://dribbble.com/"}]},
           ],
};

app.controller('headerCtrl', ['$scope', function ($scope) {
    $scope.itemsMenu = model.itemsMenu;
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

app.controller('aboutCtrl', ['$scope', function ($scope) {
  $scope.data = model.workers;
}])
.directive('team', function () {
    return {
        scope: {
            workers: "=team"
        },
        restrict: "A",
        templateUrl: 'static/js/templates/team.html'
    }
});

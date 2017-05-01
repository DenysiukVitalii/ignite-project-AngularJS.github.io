var app = angular.module("KETapp", ['smoothScroll', 'ngRoute']);

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
  news: [{
  				id: 1,
  				date: {day: '25', month: 'September'},
  				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto porro earum perferendis iure commodi, eum aliquam quas numquam similique ipsam dicta quo quibusdam eos! Nisi fuga voluptate explicabo nostrum quam.'
			   },
			   {
			   	id: 2,
  				date: {day: '15', month: 'June'},
  				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto porro earum perferendis iure commodi, eum aliquam quas numquam similique ipsam dicta quo quibusdam eos! Nisi fuga voluptate explicabo nostrum quam.'
			   },
			   {
			   	id: 3,
  				date: {day: '07', month: 'April'},
  				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto porro earum perferendis iure commodi, eum aliquam quas numquam similique ipsam dicta quo quibusdam eos! Nisi fuga voluptate explicabo nostrum quam.'
			   },
			   {
			   	id: 4,
  				date: {day: '04', month: 'May'},
  				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto porro earum perferendis iure commodi, eum aliquam quas numquam similique ipsam dicta quo quibusdam eos! Nisi fuga voluptate explicabo nostrum quam.'
			   }
			  ]
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

app.controller('formCtrl', function ($scope) {
    $scope.items = [
       { name: "Name", type: "text", placeholder: "Your name here", pattern: "nameRegex", error: "[a-zA-Z] only" },
       { name: "Email", type: "email", placeholder: "Your email here", pattern: "mailRegex", error: "Invalid email!" }
      // { name: "Message", type: "text", placeholder: "Your message here", pattern: "messageRegex" }
    ];
    $scope.submitHandler = function(isvalid) {
      (isvalid) ? alert('Form is Valid, sending data!)') : alert('Form is invalid!');
    }
    $scope.nameRegex = /^[a-zA-Z]{3,20}$/;
    $scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
    $scope.messageRegex = /.{20,}/;
    $scope.newUser = [];

})
.directive('form', function () {
    return {
        link: function (scope, element, attributes) {
            scope.data = scope[attributes["form"]];
            scope.min = 20;
        },
        restrict: "A",
        templateUrl: 'static/js/templates/form.html'
    }
});



app.controller('newsCtrl', ['$scope', function ($scope) {
  $scope.articles = model.news;
  $scope.goToNewsById = function(id) {
		$location.path('/' + id);
	}
}])
.directive('news', function () {
    return {
        scope: {
            articles: "=news"
        },
        restrict: "A",
        templateUrl: 'static/js/templates/news.html'
    }
});

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'static/js/templates/news.html'
    })
    .when('/:id', {
      templateUrl: 'static/js/templates/article.html',
      controller: 'newsDetailController as detail'
    })
    .otherwise({
      redirectTo: '/'
    })
});

app.controller('newsDetailController', ['$scope','$routeParams','$location', function ($scope, $routeParams, $location) {
	$scope.goToNews = function() {
		$location.path('/');
	}
}]);

'use strict';
angular.module("KETapp", ['myHeader', 'ourServices']);

/*var width = window.innerWidth;
var model = {
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
       ],
  achievements: [{
            title: 'Completed products',
            img: 'static/img/Icon4.png',
            number: 3054
           },
           {
            title: 'Click presed',
            img: 'static/img/Icon5.png',
            number: 7234873
           },
           {
            title: 'Mails sented & recived',
            img: 'static/img/Icon6.png',
            number: 4670
           },
           {
            title: 'Jokes tolds',
            img: 'static/img/Icon7.png',
            number: 939
           }
         ],

      portfolio: {
        categories: [{
                      title: 'All'
                     },
                     {
                      title: 'Web Design'
                     },
                     {
                      title: 'Graphic Design'
                     },
                     {
                      title: 'Photography'
                     },
                     {
                      title: 'Illustration'
                     }],
        works: [{
                    category: 'Graphic Design',
                    title: 'Sample image',
                    img: 'static/img/work1.jpg'
                  },
                  {
                    category: 'Illustration',
                    title: 'Sample image',
                    img: 'static/img/work2.jpg'
                  },
                  {
                    category: 'Web Design',
                    title: 'Sample image',
                    img: 'static/img/work3.jpg'
                  },
                  {
                    category: 'Graphic Design',
                    title: 'Sample image',
                    img: 'static/img/work1.jpg'
                  },
                  { category: 'Photography',
                    title: 'Sample image',
                    img: 'static/img/work4.jpg'
                  },
                  {
                    category: 'Web Design',
                    title: 'Sample image',
                    img: 'static/img/work3.jpg'
                  },
                  {
                    category: 'Photography',
                    title: 'Sample image',
                    img: 'static/img/work4.jpg'
                  },
                  {
                    category: 'Web Design',
                    title: 'Sample image',
                    img: 'static/img/work3.jpg'
                  },
                  {
                    category: 'Graphic Design',
                    title: 'Sample image',
                    img: 'static/img/work1.jpg'
                  },
                  {
                    category: 'Illustration',
                    title: 'Sample image',
                    img: 'static/img/work2.jpg'
                  },
                  {
                    category: 'Photography',
                    title: 'Sample image',
                    img: 'static/img/work4.jpg'
                  },
                  {
                    category: 'Illustration',
                    title: 'Sample image',
                    img: 'static/img/work2.jpg'
                  }]
      },

};



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
        templateUrl: 'app/templates/team.html'
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
        templateUrl: 'app/templates/form.html'
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
        templateUrl: 'app/templates/news.html'
    }
});

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/templates/news.html'
    })
    .when('/:id', {
      templateUrl: 'app/templates/article.html',
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

app.controller('achievementsCtrl', ['$scope', function ($scope) {
  $scope.data = model.achievements;
}])
.directive('achievements', function () {
    return {
        scope: {
            achievements: "=achievements"
        },
        restrict: "A",
        templateUrl: 'app/templates/achievements.html'
    }
});

var currentCategory = 'All';
app.controller('portfolioCtrl', ['$scope', function ($scope) {
  $scope.data = model.portfolio;
}])
.filter('category', function() {
  return function (arr) {
   return arr.filter(function(work) {
     return work.category === currentCategory || currentCategory === 'All';
   });
 }
})
.directive('portfolio', function () {
    return {
        scope: {
            portfolio: "=portfolio"
        },
        restrict: "A",
        templateUrl: 'app/templates/portfolio.html',
        link: function (scope, elem, attrs) {
          	scope.selectedItem = 'All';
          	scope.changeCategory = changeCategory;
          	scope.enterWork = enterWork;
          	scope.leaveWork = leaveWork;

          	function changeCategory(category) {
          		currentCategory = category;
          		scope.selectedItem = category;
          	};

          	function enterWork(work) {
          		scope.currentOverWork = work;
          	}

          	function leaveWork(work) {
          		scope.currentOutWork = work;
          	}
        }
    }
});

app.controller('servicesCtrl', ['$scope', function ($scope) {
  $scope.data = model.services;
}])
.directive('services', function () {
    return {
        scope: {
            services: "=services"
        },
        restrict: "A",
        templateUrl: 'app/templates/services.html',
        link: function (scope, elem, attrs) {
            scope.selectedTab = model.services[0];
            scope.changeService = function(service) {
              scope.selectedTab = service;
            }
        }
    }
});*/

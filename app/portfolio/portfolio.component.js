'use strict';

var currentCategory = 'All';

angular.
  module('portfolio').
  filter('category', filterByCategory).
  component('portfolio', {
  	controllerAs: 'portfolio',
  	controller: portfolioController,
    templateUrl: 'app/portfolio/portfolio.template.html'
});

function portfolioController() {
	var scope = this;
	scope.model = portfolioModel;
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

function filterByCategory() {
  return function (arr) {
   return arr.filter(function(work) {
     return work.category === currentCategory || currentCategory === 'All';
   });
 }
}

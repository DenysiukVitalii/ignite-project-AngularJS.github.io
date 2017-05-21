'use strict';

angular.
  module('ourNews').
  config(function ($routeProvider) {
	  $routeProvider
	    .when('/', {
	      templateUrl: 'app/ournews/templates/ournews-list.template.html'
	    })
	    .when('/:id', {
	      templateUrl: 'app/ournews/templates/ournews-detail.template.html',
	      controller: 'newsDetailController as detail'
	    })
	    .otherwise({
	      redirectTo: '/'
	    })
	}).
	controller('newsDetailController', newsDetailController).
  component('ourNews', {
		controllerAs: 'ourNews',
		controller: ourNewsController,
	  templateUrl: 'app/ournews/templates/ournews.template.html'
	});


function ourNewsController($location) {
	this.model = ourNewsModel;
	this.goToNewsById = function(id) {
		$location.path('/' + id);
	}
}

function newsDetailController($routeParams, $location) {
	var id = $routeParams.id;
	for (var i = 0; i < ourNewsModel.news.length; i++) {
		if (ourNewsModel.news[i].id == id) {
			this.article = ourNewsModel.news[i];
			break;
		}
	}

	this.goToNewsList = function() {
		$location.path('/');
	}
}

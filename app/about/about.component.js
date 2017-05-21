'use strict';

angular.
  module('about').
  component('about', {
  	controllerAs: 'about',
  	controller: aboutController,
    templateUrl: 'app/about/about.template.html'
});

function aboutController() {
	this.model = aboutModel;
}

'use strict';

angular.
  module('myHeader').
  component('myHeader', {
    controllerAs: 'myHeader',
  	controller: myHeaderController,
    templateUrl: 'app/header/header.template.html'
});

function myHeaderController() {
  this.model = headerModel;

  this.showMenu = function() {
    var mobileMenu = document.querySelector("#menu-list");
    mobileMenu.classList.toggle('show-menu');
  }
}

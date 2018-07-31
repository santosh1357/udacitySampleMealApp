'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
 //creating the default module which taken when we run the command "yo angular udaciMeals"
 //to get the module use "angular.module('moduleName')"
angular
  .module('udaciMealsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: 'views/menu.html',
  			controller: 'MenuCtrl as menu' 
  		})
  		.state('item', {
  			url: '/item/:id',
  			templateUrl: 'views/item.html',
  			controller: 'ItemCtrl as menu' 
  		})
  		.state('item.nutrition', {
  			url: '/nutrition',
  			templateUrl: 'views/item-nutrition.html',
  		})
  		.state('item.reviews', {
  			url: '/reviews',
  			templateUrl: 'views/item-reviews.html', 
  		});
  }]);

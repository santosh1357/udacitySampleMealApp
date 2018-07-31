'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemctrlCtrl
 * @description
 * # ItemctrlCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('Itemctrl', ['$stateParams, foodFInder', function($stateParams, foofFinder){
  	var vm = this;

  	foofFinder.getItem($stateParams.id).then(function(data){
  		vm.data = data;
  	});


  }]);

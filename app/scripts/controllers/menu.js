'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrlx
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['foodFinder', 'orderManager', function (menu, orderManager) {  //injector is passed as service name to the controller
  	var vm = this; //use lexical scoping to fix this binding issue.
  	menu.getMenu().then(function(data){ //call getMenu fun to get json data from injector
  										//since injector returns jq deffered object we use promises's then to process data
  		vm.items = data;
  	});

    this.chooseItem = function(menuCategory, menuItemName){

    }; 
    this.increment = function(item){
    	item.rating = (( item.rating *10) + 1) / 10;
    };
    this.decrement = function(item){
    	item.rating = (( item.rating *10) -1  ) / 10;
    };
   } 
    ]
  );

'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.orderManager
 * @description
 * # orderManager
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('orderManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var selectedDay = 'Monday';
    var orderSelection = {
    	Monday: {
    		breakfast: '',
    		lunch: '',
    		dinner:''
    	},
		Tuesday: {
    		breakfast: '',
    		lunch: '',
    		dinner: ''
    	},
        Wednesday: {
    		breakfast: '',
    		lunch: '',
    		dinner: ''
    	},
    	Thursday: {
    		breakfast: '',
    		lunch: '',
    		dinner:''
    	},
    	Friday: {
    		breakfast: '',
    		lunch: '',
    		dinner:''
    	},
    	Saturday: {
    		breakfast: '',
    		lunch: '',
    		dinner: ''
    	}    	    	    	
    };
    this.getActiveDay = function(){
    	return selectedDay;
    };
    this.setActiveDay = function(day){
    	 selectedDay = day;
    };
    this.chosseMenuItem = function(meal, menuItem){
    	orderSelection[selectedDay][meal] = menuItem;
    };
    this.removeMenuItem = function(day, menuCategory){
    	orderSelection[day][menuCategory] = '';
    }; 
    this.getOrders = function(){
    	return orderSelection;
    };   
  });





















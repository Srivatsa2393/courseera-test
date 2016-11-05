(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
//declaring the 2 controllers
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
  //declaring the service
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var buyCtrl = this;
		buyCtrl.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

		buyCtrl.buy = function(index){
			ShoppingListCheckOffService.buy(index);
		};

      buyCtrl.isEmpty = function(){
        return buyCtrl.itemsToBuy.length === 0;
      };
	}

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService){
		var boughtCtrl = this;
		boughtCtrl.itemsBought = ShoppingListCheckOffService.itemsBought();

		boughtCtrl.isEmpty = function(){
			return boughtCtrl.itemsBought.length === 0;
		};
    }
 service

//service function
	function ShoppingListCheckOffService(){
	  var service = this;

    //pre-populated array of items
	  var buy = [
				{name: "Chocolates", quantity:"25"},
				{name: "Milk", quantity:"2 litres"},
				{name: "Apple", quantity:"5 kilograms"},
				{name: "Pizza", quantity:"2"},
				{name: "Chips", quantity:"4 packets"},
        {name: "Green Peas", quantity:"2 kilograms"}
				];

	  var bought = [];

	  service.itemsToBuy = function(){
	    return buy;
	  };

	  service.itemsBought = function(){
	    return bought;
	  };

	  service.buy = function(index){
	    var value = buy[index];
	    bought.push(value);
	    buy.splice(index, 1);
	  };
	}

})();

(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
        let toBuyCtrl = this;
        toBuyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuyCtrl.checkOff = function(itemIndex){
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        let boughtCtrl = this;
        boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        let service = this;
        let itemsToBuy = [
                {
                    name: "Milk",
                    quantity: "5"
                },
                {
                    name: "Donuts",
                    quantity: "20"
                },
                {
                    name: "Cookies",
                    quantity: "30"
                },
                {
                    name: "Chocolate",
                    quantity: "5"
                },
                {
                    name: "Wine",
                    quantity: "2"
                },
                {
                    name: "Cheese",
                    quantity: "5"
                },
                {
                    name: "Crackers",
                    quantity: "20"
                }
            ];
        let boughtItems = [];

        service.checkOff = function(itemToBuyIndex){
            boughtItems.push(itemsToBuy.splice(itemToBuyIndex, 1)[0]);
        }

        service.getItemsToBuy = function(){
            return itemsToBuy;
        }

        service.getBoughtItems = function() {
            return boughtItems;
        }
    }
})();
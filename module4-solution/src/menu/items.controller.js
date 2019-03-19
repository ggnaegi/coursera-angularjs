(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['itemsData'];
    function ItemsController(itemsData) {
        const items = this;
        items.sorted = itemsData.sortedItems;
        items.category = itemsData.currentCategory;
    }

})();
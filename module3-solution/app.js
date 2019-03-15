(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        let ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'nidc',
            bindToController: true
        };
        return ddo;
    }

    function FoundItemsDirectiveController() {
        let nidc = this;
        nidc.noResults = function(){
            return nidc.found.length == 0;
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService){
        let narrowItDown = this;
        narrowItDown.searchTerm = "";
        narrowItDown.found = [];

        narrowItDown.getMatchedMenuItems = function() {
            if(!narrowItDown.searchTerm)
            {
                narrowItDown.found = [];
                return;
            }

            let searchPromise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
            searchPromise.then(function(results){
                narrowItDown.found = results;
            }).catch(function(error){
                console.log("Error my friend.");
            });
        }

        narrowItDown.removeItem = function (itemIndex) {
            narrowItDown.found.splice(itemIndex, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        let service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                return result.data.menu_items.filter(function (x) {
                    return x.description.match(new RegExp(searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&').toLowerCase()))
                });
            });
        };
    }


})();
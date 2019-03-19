(function() {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath){
        const service = this;

        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result){
               return result.data.sort(function(x, y){
                   let xName = x.name.toLowerCase();
                   let yName = y.name.toLowerCase();
                   return yName <= xName ? xName > yName ? 1 : 0 : -1;
               });
            });
        }

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            }).then(function (result) {
                return{
                    "currentCategory":result.data.category,
                    "sortedItems":result.data.menu_items.sort(function (x, y) {
                        let xName = x.name.toLowerCase();
                        let yName = y.name.toLowerCase();
                        return yName <= xName ? xName > yName ? 1 : 0 : -1;
                    })
                }

            });
        }
    }
})();
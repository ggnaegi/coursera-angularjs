(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/categories.template.html',
                controller: 'CategoriesController as categories',
                resolve: {
                    categoriesList: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                parent: 'categories',
                url: '/items/{categoryId}',
                resolve: {
                    itemsData: ['MenuDataService', '$stateParams',
                        function (MenuDataService, $stateParams) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryId);
                        }]
                },
                views: {
                    "items-div" : {
                        templateUrl: 'src/menu/templates/items.div.template.html',
                        controller: 'ItemsController as items'
                    },
                    "items-li" : {
                        templateUrl: 'src/menu/templates/items.li.template.html',
                        controller: 'ItemsController as items'
                    }
                }
            })
    }

})();

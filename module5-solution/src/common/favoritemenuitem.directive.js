(function(){
    angular.module('common')
        .directive('favoriteMenuItemDirective', FavoriteMenuItemDirective);

    FavoriteMenuItemDirective.$inject = ['MenuService'];
    function FavoriteMenuItemDirective(MenuService){
        const ddo = {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ngModel) {
                ngModel.$asyncValidators.invalidFavoriteMenuItem = function(modelValue, viewValue) {
                    let menuItem = viewValue;
                    return MenuService.getMenuItem(menuItem);
                }
            }
        };
        return ddo;
    }
})();

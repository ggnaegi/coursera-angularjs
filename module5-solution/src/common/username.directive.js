(function(){
    angular.module('common')
        .directive('userNameDirective', UserNameDirective);

    UserNameDirective.$inject = ['ProfileService'];
    function UserNameDirective(ProfileService){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                ngModel.$asyncValidators.userNameExists = function (modelValue, viewValue) {
                    return ProfileService.userNameExists(viewValue);
                }
            }
        };
    }
})();

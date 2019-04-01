(function(){
    angular.module('common')
        .directive('userNameDirective', UserNameDirective);

    UserNameDirective.$inject = ['ProfileService', '$q'];
    function UserNameDirective(ProfileService, $q){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel, $q) {
                ngModel.$asyncValidators.uniqueUserName = function (modelValue, viewValue) {
                    let userNameValue = viewValue;
                    return ProfileService.getUserNames().then(function foundUserName(result){
                        if(result.indexOf(userNameValue) > -1) {
                            return $q.reject();
                        }
                        else {
                            return true;
                        }
                    })
                }
            }
        };
    }
})();

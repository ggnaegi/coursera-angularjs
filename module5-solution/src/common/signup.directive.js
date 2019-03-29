(function(){
    angular.module('common')
        .directive('signupDirective', SignupDirective);

    function SignupDirective() {
        const ddo = {
            restrict: 'A',
            controller: 'SignupDirectiveController as signupDirectiveCtrl',
            bindToController: true
        };
        return ddo;
    }
})();

(function(){
    "use strict";
    angular.module('common')
        .controller('SignupDirectiveController', SignupDirectiveController)

    SignupDirectiveController.$inject = ['ProfileService', '$rootScope'];
    function SignupDirectiveController(ProfileService, $rootScope) {
        const signupDirectiveCtrl = this;
        let listener;

        signupDirectiveCtrl.isUserLoggedIn = false;

        signupDirectiveCtrl.$onInit = function() {
            listener = $rootScope.$on('response:received', updateUserLoggedIn);
        };

        signupDirectiveCtrl.$onDestroy = function() {
            listener();
        };

        function updateUserLoggedIn(event, data) {
            signupDirectiveCtrl.isUserLoggedIn = ProfileService.isUserLoggedIn();
        };
    }
})();



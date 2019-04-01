(function(){
    angular.module('public')
        .component('loginsignup', {
            templateUrl:'src/public/profile/loginsignup.html',
            controller: LoginSignupController
        });

    LoginSignupController.$inject = ['ProfileService', '$rootScope'];
    function LoginSignupController(ProfileService, $rootScope) {
        const $ctrl = this;
        let listener;

        $ctrl.$onInit = function() {
            $ctrl.isUserLoggedIn = false;
            listener = $rootScope.$on('response:received', updateUserLoggedIn);
        };

        $ctrl.$onDestroy = function() {
            listener();
        };

        function updateUserLoggedIn(event, data) {
            $ctrl.isUserLoggedIn = ProfileService.isUserLoggedIn();
        };

        $ctrl.userLogOut = function(){
            ProfileService.userLogOut();
        }
    }
})();

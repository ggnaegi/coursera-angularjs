(function(){
    "use strict";
    angular.module('public')
        .controller('SignupController', SignupController)

    SignupController.$inject = ['ProfileService', '$location'];
    function SignupController(ProfileService, $location) {
        const signupCtrl = this;

        signupCtrl.submit = function () {
            ProfileService.createNewUserAccount(signupCtrl.userProfile)
                .then(function(result){
                    $location.path("/profile/info")
                });
        }
    }
})();

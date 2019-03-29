(function(){
    "use strict";
    angular.module('public')
        .controller('SignupController', SignupController)

    SignupController.$inject = ['ProfileService'];
    function SignupController(ProfileService) {
        const signupCtrl = this;

        signupCtrl.done = false;
        signupCtrl.submit = function () {
            ProfileService.createNewUserAccount(signupCtrl.userProfile)
                .then(function(result){
                    signupCtrl.done = result.data;
                });
        }
    }
})();

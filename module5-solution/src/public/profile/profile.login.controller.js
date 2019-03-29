(function(){
    "use strict";
    angular.module('public')
        .controller('LoginController', LoginController)

    LoginController.$inject = ['ProfileService','$uibModal'];
    function LoginController(ProfileService, $uibModal) {
        const loginCtrl = this

        loginCtrl.openLoginModal = function() {
            let modalInstance = $uibModal.open({
                templateUrl: "src/public/profile/login.html",
                controller: "LoginContentController as loginContentCtrl",
                size: '',
            });

            modalInstance.result.then(function(response){
            });
        }


    }
})();

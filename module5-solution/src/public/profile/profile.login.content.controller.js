(function(){
    "use strict";
    angular.module('public')
        .controller('LoginContentController', LoginContentController)

    LoginContentController.$inject = ['ProfileService','$uibModalInstance', '$state'];
    function LoginContentController(ProfileService, $uibModalInstance, $state) {
        const loginContentCtrl = this

        loginContentCtrl.username = '';
        loginContentCtrl.password = '';

        loginContentCtrl.login = function(){
            ProfileService.setUserAuthorization({'username':loginContentCtrl.username, 'password':loginContentCtrl.password});
            $state.reload();
            $uibModalInstance.close('OK');
        }

        loginContentCtrl.cancel = function(){
            $uibModalInstance.close('CANCEL');
        }
    }
})();

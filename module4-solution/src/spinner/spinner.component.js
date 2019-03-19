(function () {
    'use strict';

    angular.module('Spinner')
        .component('loadingSpinner', {
            templateUrl: 'src/spinner/spinner.template.html',
            controller: SpinnerController
        });


    SpinnerController.$inject = ['$rootScope']
    function SpinnerController($rootScope) {
        const $ctrl = this;
        const cancellers = [];

        $ctrl.$onInit = function () {
            let cancel = $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams, options) {
                    $ctrl.showSpinner = true;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams){
                    $ctrl.showSpinner = false;
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function(event, toState, toParams, fromState, fromParams, error){
                    $ctrl.showSpinner = false;
                });
            cancellers.push(cancel);
        };

        $ctrl.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };

    };

})();

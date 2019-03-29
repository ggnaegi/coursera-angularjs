(function() {
"use strict";

angular.module('common', [])
    .constant('ApiPath', "https://ggnaegi-coursera-angularjs.herokuapp.com")
    .constant('ProfileApiPath', "https://ggnaegi-angularjs-profiles.herokuapp.com/api")
    .config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

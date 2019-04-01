(function () {
    "use strict";

    angular.module('common')
        .service('ProfileService', ProfileService);


    ProfileService.$inject = ['$http', '$httpParamSerializer', 'ProfileApiPath'];
    function ProfileService($http, $httpParamSerializer, ProfileApiPath) {
        const service = this;

        service.userAuthorization = '';
        service.userProfile = {};

        service.isUserLoggedIn = function(){
            return service.userAuthorization !== '';
        };

        service.createNewUserAccount = function(newUserProfile){
            return $http({
                        method: 'POST',
                        url: ProfileApiPath + "/account",
                        headers: {'Content-Type':'application/x-www-form-urlencoded'},
                        data: $httpParamSerializer(newUserProfile)
                    }).then(function(){
                        service.userAuthorization = 'Basic ' + btoa(newUserProfile.username + ':' + newUserProfile.password);
                    }).catch(function() {
                        service.userAuthorization = '';
            });
        };

        service.userLogOut = function(){
            service.userAuthorization = '';
        };

        service.userNameExists = function(userName){
            return $http({
                method: 'GET',
                url: ProfileApiPath + "/accounts"
            }).then(function(response){
                return response.data.some(function(element){element === userName});
            })
        };

        service.setUserAuthorization = function(userCredentials){
            service.userAuthorization = 'Basic ' + btoa(userCredentials.username + ':' + userCredentials.password);
        };

        service.getUserProfile = function(){
            return $http({
                        method: 'GET',
                        headers: {
                            'Authorization': service.userAuthorization
                        },
                        url: ProfileApiPath + "/profile"
                }).then(function(response){
                   return response.data;
                }).catch(function(){
                    service.userAuthorization = '';
            });
        };

        service.updateUserProfile = function(updatedUserProfile){
            return $http({
                method: 'PUT',
                url: ProfileApiPath + "/profile",
                headers: {
                    'Authorization': service.userAuthorization,
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializer(updatedUserProfile)
            }).then(function(response){
                return response.data.status === 'user_profile_updated';
            });
        };

        service.deleteUserAccount = function(){
            return $http({
                method: 'DELETE',
                url: ProfileApiPath + "/account",
                headers: {
                    'Authorization': service.userAuthorization
                }
            }).then(function(response){
                if(response.data.status === 'account_deleted')
                    service.userAuthorization = '';

                return response.data.status === 'account_deleted';
            });
        }

    }
})();

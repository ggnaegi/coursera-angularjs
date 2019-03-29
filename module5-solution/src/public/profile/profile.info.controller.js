(function(){
    "use strict";

    angular.module('public')
        .controller('ProfileInfoController', ProfileInfoController);

    ProfileInfoController.$inject = ['ApiPath', 'userProfileData', 'ProfileService', 'MenuService'];
    function ProfileInfoController(ApiPath, userProfileData, ProfileService, MenuService) {
        const profileInfoCtrl = this;
        profileInfoCtrl.basePath = ApiPath;
        profileInfoCtrl.registered = userProfileData.registered;
        profileInfoCtrl.userProfile = userProfileData.userProfile;
        profileInfoCtrl.favoriteMenu = userProfileData.favoriteMenu;

        profileInfoCtrl.update = function(){
            ProfileService.updateUserProfile(profileInfoCtrl.userProfile).then(function(result)
            {
                MenuService.getMenuItem(profileInfoCtrl.userProfile.favoriteMenuItem).then(function(result)
                {
                    profileInfoCtrl.favoriteMenu = result;
                })
            })
        }
    }

})();

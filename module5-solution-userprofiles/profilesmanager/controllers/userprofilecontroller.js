const UserProfile = require('../models/userprofile');

exports.getUserProfile = function(req, res) {
    UserProfile.findOne({_id:req.user.profile}, function(err, userProfile){
        if(err)
            return res.send(err);
        res.json(userProfile);
    });
}

exports.updateUserProfile = function(req, res) {
    UserProfile.findOne({_id: req.user.profile}, function(err, userProfile){
        if(err)
            return res.send(err);

        userProfile.firstname = req.body.firstname;
        userProfile.lastname = req.body.lastname;
        userProfile.email = req.body.email;
        userProfile.phone = req.body.phone;
        userProfile.address = req.body.address;
        userProfile.city = req.body.city;
        userProfile.postCode = req.body.postCode;
        userProfile.favoriteMenuItem = req.body.favoriteMenuItem;

        userProfile.save(function(err){
            if(err)
                return res.send(err);
            res.json({status: 'user_profile_updated'});
        });
    })
}




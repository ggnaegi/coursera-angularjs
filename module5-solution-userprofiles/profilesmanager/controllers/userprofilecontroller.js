const UserProfile = require('../models/userprofile');

exports.getUserProfiles = function(req, res) {
    UserProfile.find(function(err, userProfiles){
        if(err)
            res.send(err);
        res.json(userProfiles);
    })
}

exports.getUserProfile = function(req, res) {
    UserProfile.find({userId: req.user._id}, function(err, userProfile){
        if(err)
            res.send(err);

        res.json(userProfile);
    });
}

exports.updateUserProfile = function(req, res) {
    UserProfile.findOne({userId: req.user._id}, function(err, userProfile){
        if(err)
            res.send(err);

        if(!userProfile) {
            userProfile = new UserProfile({userId: req.user._id});
        }

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
                res.send(err);
            res.json(userProfile);
        });
    })
}

exports.deleteUserProfile = function(req, res) {
    UserProfile.remove({userId:req.user._id}, function(err){
        if(err)
            res.send(err);

        res.json({message: 'User profile has been removed!'});
    });
}




const User = require('../models/user');
const UserProfile = require('../models/userprofile');

exports.addNewUserAccount = function(req, res) {
    User.findOne({username: req.body.username}, function(err, userProfile){

        if(userProfile)
            res.json({status: 'existing_username'});
        else
        {
            let userProfile = new UserProfile({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phone : req.body.phone,
                address : req.body.address,
                city : req.body.city,
                postCode : req.body.postCode,
                favoriteMenuItem : req.body.favoriteMenuItem
            });

            let user = new User({
                username: req.body.username,
                password: req.body.password,
                profile: userProfile
            });

            user.save(function(err, userRes) {
                if (err)
                    return res.send(err);

                res.json(userRes);
            });
        }
    });
};

exports.welcomeUserAccount = function(req, res) {
    res.json({status: 'credentials_verified'});
}

exports.deleteUserAccount = function(req, res) {
    User.deleteOne({_id:req.user._id}, function(err){
        if(err)
            return res.send(err);
        res.json({status: 'account_deleted'});
    });
};

const User = require('../models/user');
const UserProfile = require('../models/userprofile');

exports.addNewUserAccount = function(req, res) {
    User.findOne({username: req.body.username}, function(err, userProfile){

        if(userProfile)
            res.json({status: 'existing_username'});
        else
        {
            let user = new User({
                username: req.body.username,
                password: req.body.password
            });

            user.save(function(err) {
                if (err)
                    res.send(err);

                let userProfile = new UserProfile({
                    firstname : req.body.firstname,
                    lastname : req.body.lastname,
                    email : req.body.email,
                    phone : req.body.phone,
                    address : req.body.address,
                    city : req.body.city,
                    postCode : req.body.postCode,
                    favoriteMenuItem : req.body.favoriteMenuItem,
                    userId : user._id
                });

                userProfile.save(function(err){
                    if(err) {
                        User.deleteOne({_id:user._id}, function(err){
                            if(err)
                                res.send(err);
                        })
                        res.send(err);
                    }
                    res.json({ status: 'new_account_created' });
                })
            });
        }
    });
};

exports.welcomeUserAccount = function(req, res) {
    res.json({status: 'credentials_verified'});
}

exports.deleteUserAccount = function(req, res) {
    UserProfile.deleteOne({idUser:req.user.id}, function(err){
        if(err)
            res.send(err);

        User.deleteOne({_id:req.user._id}, function(err){
            if(err)
                res.send(err);
            res.json({status: 'account_deleted'})
        });
    });
};

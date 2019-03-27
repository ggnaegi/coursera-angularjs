const User = require('../models/user');
const UserProfile = require('../models/userprofile');

exports.addNewUserAccount = function(req, res) {
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New user account created!' });
    });
};

exports.deleteUserAccount = function(req, res) {
    UserProfile.remove({idUser:req.user.id}, function(err){
        if(err)
            res.send(err);

        User.remove({_id:req.user._id}, function(err){
            if(err)
                res.send(err);
            res.json({message: 'Your Account has been deleted!'})
        });
    });
};

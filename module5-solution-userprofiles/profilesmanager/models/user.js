// Load required packages
const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const UserProfile = require('../models/userprofile');
// Define our user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile:{type:mongoose.Schema.Types.ObjectId, ref: 'UserProfile'}
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
    const user = this;
    // Break out if the password hasn't changed
    if (!user.isModified('password')) return callback();

    user.profile.save(function(err){
        if(err) return callback(err);
    })
    // Password changed so we need to hash it
    bcrypt.genSalt(5, function(err, salt) {
        if (err) return callback(err);

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

UserSchema.methods.verifyPassword = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);

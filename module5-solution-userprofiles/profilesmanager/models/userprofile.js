const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    postCode: String,
    favoriteMenuItem: String,
    userId: String
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);

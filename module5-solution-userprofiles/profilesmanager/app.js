const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userprofile', {useNewUrlParser: true});

const bodyParser = require('body-parser');
const UserProfile  = require('./models/userprofile');
const UserProfileController = require('./controllers/userprofilecontroller');
const UserController = require('./controllers/usercontroller');
const AuthController = require('./controllers/authcontroller');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

app.use(bodyParser.urlencoded({
    extended:true
}));

router.route('/profile')
    .get(AuthController.isAuthenticated, UserProfileController.getUserProfile)
    .put(AuthController.isAuthenticated, UserProfileController.updateUserProfile);

router.route('/account')
    .post(UserController.addNewUserAccount)
    .delete(AuthController.isAuthenticated, UserController.deleteUserAccount);

app.use('/api', router);
app.listen(port);

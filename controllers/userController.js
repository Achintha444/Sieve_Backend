const User = require('../models/userModel');

exports.user_login = (req, res, next) => {
    const email = 'temp123@gmail.com';//req.body.email;
    const password = 'sieve';//req.body.password
    User.getUserFromEmail(email).then((user) => {
        if (user) {
            console.log(user);
            res.json({
                email: user.email,
            });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ error: 'Database Connection Faliure!' });
        }
    });
}
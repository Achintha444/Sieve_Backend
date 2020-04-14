const User = require('../models/userModel');
const hashFunctions = require('../utils/hash_function');

exports.user_login2 = (req, res, next) => {
    const email = 'temp123@gmail.com';//req.body.email;
    const password = 'sieve';//req.body.password
    User.getUserFromEmail(email).then((user) => {
        if (user) {
            console.log(user);
            res.json({
                email: user.email,
                password : password
            });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ error: 'Database Connection Faliure!' });
        }
    });
}

exports.user_login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    User.getUserFromEmail(email).then((user) => {
        if (user) {
            if (hashFunctions.checkHash(password, user.password)) {
                console.log(user);
                res.json({
                    email: user.email,
                    password: password
                });
            }
            else {
                res.status(404).json({ error: 'Wrong Password' });
            }
        } else{
            res.status(404).json({ error: 'Wrong Password' });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ error: 'Database Connection Faliure!' });
        }
    });
}

exports.user_signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    User.insert(req.body).then(()=>{
        res.status(200).json({success: true});
    }).catch(()=>{
        res.status(404).json({success: false})
    });
}
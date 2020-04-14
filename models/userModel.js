const db = require('../utils/database');
const hashFunctions = require('../utils/hash_function');

module.exports = class User {
    constructor(params) {
        this.id = params.id,
            this.username = params.email,
            this.password = params.password
    }

    static insert(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);
            resolve(db.query("INSERT INTO tbl_common_user (common_user_id, email, password) VALUES (?,?,?)",
                [userInput.id,
                userInput.email,
                hashFunctions.encrypt(userInput.password)]))
        }).catch((err) => {
            console.log(err);
        });

    }

    static getUserFromEmail(email) {

        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_users WHERE email = ?", [email]))
        }).then(value => {
            const detail = value[0];
            return new User(detail);
        }).catch((err) => {
            console.log(err);
        });
    }

};

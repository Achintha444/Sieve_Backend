const Cryptr = require('cryptr');
var cryptr = new Cryptr('SievePassword');

exports.encrypt = (password)=> {
    return cryptr.encrypt(password);
}

exports.decrypt = (hashPassowrd) => {
    return cryptr.decrypt(hashPassowrd);
}
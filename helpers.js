const bcrypt = require('bcrypt');

const getHashValue = (password) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                return resolve(hash);
            });
        });
    });
    
}

module.exports = getHashValue;
const User = require('../model/user');
const getHashValue = require("../helpers");
const bcrypt = require('bcrypt');

async function signIn(req, res) {
    let {email, password} = req.body;

    
    const user = await User.findOne({email: email});
    if (!user) res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        res.status(400).send("Invalid email or password");
    } else {
        res.status(200).send('OK');
    }
  
}

module.exports = signIn;
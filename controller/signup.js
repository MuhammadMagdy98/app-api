const getHashValue = require("../helpers");
const User = require('../model/user');


const handleError = (err) => {
    if (err.code === 11000) {
        return 'This email is already registered';
    }
}

async function signUp(req, res) {
    let { email, password, username, mobile, dateOfBirth, dateOfPregenance } = req.body;
    console.log(password);

    password = await getHashValue(password);

    console.log(password);
    try {
        const user = await User.create({
            email,
            password,
            username,
            mobile,
            dateOfBirth,
            dateOfPregenance,

        });

        res.status(200).send(user._id);
    } catch(err) {
        res.status(302).send(handleError(err));
    }
  
}

module.exports = signUp;
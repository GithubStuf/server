const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../Models/Users');

const addUser = async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json('User not found'); // Updated status code
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                // Password is valid
                const token = jwt.sign({
                    userId: user._id,
                    isAdmin: user.isAdmin,
                }, process.env.SECRET_KEY, {
                    expiresIn: '3d'
                });

                const { _id, isAdmin, ...others } = user._doc;
                return res.status(200).json({ _id, isAdmin, ...others, token }); // Updated status code and response format
            }
            return res.status(404).json(err);
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error); // Updated status code
    }
};


module.exports = {
    addUser,
    authUser,
};

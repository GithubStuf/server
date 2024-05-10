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
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json('User not found');
        }
        bcrypt.compare(user.password, password, (error, result) => {
            if (result) {
                // Password is valid
                const token = jwt.sign({
                    userId: user._id,
                    isAdmin: user.isAdmin,
                }, process.env.SECRET_KEY, {
                    expiresIn: '3d'
                });

                res.status(200).json({ token, ...user._doc });
            } else if(error) {
                return res.status(401).json('Invalid password');
            }
        });
    } catch (e) {
        return res.status(500).json(e.toString());
    }
};



module.exports = {
    addUser,
    authUser,
};

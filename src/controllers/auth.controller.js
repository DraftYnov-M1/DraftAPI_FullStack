const db = require('../models');
const cryptPassword = require('../helpers/cryptPassword');
const generateToken = require('../helpers/generateToken');

module.exports = {
    registerUser : async (req, res) => { 
        const { mail, password, firstName, lastName } = req.body;
        const hashedPassword = await cryptPassword(password);
        try {
            if (hashedPassword) {
                const user = await db.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    mail: mail,
                    password: hashedPassword
                });
                if (user) {
                    const token = generateToken({ id: user.id });
                    if (token) {
                        res.status(201).json({
                            token: token, 
                            success: true
                        });
                    }
                }
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message,
                success: false
            });
        }
        
    }, 
    getMe: async(req, res) => {
        try {
            const user = await db.User.findByPk(req.user.id);
            if (user) {
                res.status(200).json({
                    user: user,
                    success: true
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                message: err.message,
                success: false
            });
        }
    }
}
const UserService  = require('../services/userService');
const userService = new UserService();
const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });

        return res.status(201).json({
            message: 'User created successfully',
            data: response,
            success: true,
            err: {}
        })
    } catch (error) {
        console.log('Something went wrong at controller');
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    create
}
const userService = require('../services/userService');

/**
 *
 * @param req
 * @param res
 */
function createUser(req, res) {
    const { username } = req.body;
    userService.createUser(username)
        .then(user => {
            res.json({ message: 'User created successfully', user });
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while creating the user' });
        });
}

module.exports = {
    createUser,
};

/**
 *
 * @param username
 * @returns {{username}}
 */
async function createUser(username) {
    try {
        // perform logic here
        return { username };
    }
    catch (error)
    {
        // log errors
        // rollback
    }
}

module.exports = {
    createUser,
};

/**
 *
 * @param requestBody
 * @returns {{user, seatNumber}}
 */
function validateBookSeatRequest(requestBody) {
    const { user, seatNumber } = requestBody;

    if (!user || !seatNumber) {
        throw new Error('Invalid request. Please provide user and seat number.');
    }

    // Return the validated values
    return { user, seatNumber };
}

module.exports = {
    validateBookSeatRequest,
};

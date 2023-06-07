const seatService = require('../services/seatService');
const bookSeatRequestHandler = require('../requests/bookSeatRequestHandler');

/**a
 *
 * @param req
 * @param res
 */
function bookSeat(req, res) {
    const { id } = req.params;
    const { user, seatNumber } = bookSeatRequestHandler.validateBookSeatRequest(req.body);

    seatService.bookSeat(id, user, seatNumber)
        .then(() => {
            res.json({ message: `Seat ${seatNumber} booked successfully for User ${user}` });
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while booking the seat' });
        });
}

module.exports = {
    bookSeat,
};

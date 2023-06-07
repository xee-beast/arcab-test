const seatService = require('../services/seatService');

describe('Seat Service', () => {
    describe('bookSeat', () => {
        it('should book a seat successfully', async () => {
            // Mock input values
            const id = '1';
            const user = 'Zeshan';
            const seatNumber = 'A1';

            // Mock the seatService.bookSeat method
            seatService.bookSeat = jest.fn().mockResolvedValue();

            // Call the bookSeat method
            await seatService.bookSeat(id, user, seatNumber);

            // Check if the bookSeat method was called with the correct arguments
            expect(seatService.bookSeat).toHaveBeenCalledWith(id, user, seatNumber);
        });

        it('should throw an error when seat booking fails', async () => {
            // Mock input values
            const id = '2';
            const user = 'Zeshan';
            const seatNumber = 'A111';

            // Mock the seatService.bookSeat method to throw an error
            seatService.bookSeat = jest.fn().mockRejectedValue(new Error('Booking failed'));

            // Call the bookSeat method and expect it to throw an error
            await expect(seatService.bookSeat(id, user, seatNumber)).rejects.toThrow('Booking failed');
        });
    });
});

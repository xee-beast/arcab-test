const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const routeController = require('./controllers/routeController');
const seatController = require('./controllers/seatController');

router.post('/users', userController.createUser);

router.get('/routes/:id', routeController.getRoute);
router.get('/routes/:id/schedule', routeController.getRouteSchedule);
router.get('/routes/:id/seats', routeController.getRouteSeats);

router.post('/routes/:id/seats', seatController.bookSeat);

module.exports = router;

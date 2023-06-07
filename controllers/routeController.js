const routeService = require('../services/routeService');

/**
 *
 * @param req
 * @param res
 */
function getRoute(req, res) {
    const { id } = req.params;
    routeService.getRoute(id)
        .then(route => {
            res.json(route);
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching the route' });
        });
}

/**
 *
 * @param req
 * @param res
 */
function getRouteSchedule(req, res) {
    const { id } = req.params;
    routeService.getRouteSchedule(id)
        .then(schedule => {
            res.json(schedule);
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching the route schedule' });
        });
}

/**
 *
 * @param req
 * @param res
 */
function getRouteSeats(req, res) {
    const { id } = req.params.id;
    routeService.getRouteSeats(id)
        .then(seats => {
            res.json({ seats });
        })
        .catch(error => {
            res.status(500).json({ error: 'An error occurred while fetching the seat booking status' });
        });
}

/**
 *
 * @type {{getRouteSeats: getRouteSeats, getRouteSchedule: getRouteSchedule, getRoute: getRoute}}
 */
module.exports = {
    getRoute,
    getRouteSchedule,
    getRouteSeats,
};

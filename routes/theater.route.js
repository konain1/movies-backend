const { validateCreateTheaterRequest, validateUpdateMoviesInTheaterRequest } = require('../middlewares/theater.middleware')
const theaterController = require('../controllers/theater.controller')

const routes = (app) => {
    app.post('/mbp/api/v1/theaters', validateCreateTheaterRequest, theaterController.create)
    app.get('/mbp/api/v1/theaters', theaterController.getTheaters)
    app.delete('/mbp/api/v1/theaters/:id', theaterController.destroy)
    app.get('/mbp/api/v1/theaters/:id', theaterController.getTheater)
    app.put('/mbp/api/v1/theaters/:id', theaterController.update)
    app.patch('/mbp/api/v1/theaters/:id/movies', validateUpdateMoviesInTheaterRequest, theaterController.updateMovieInTheTheater)
}

module.exports = routes
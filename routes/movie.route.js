
const movieController = require('../controllers/movie.controller')
const { ValidationMovieCreateRequest } = require('../middlewares/movie.middleware')

const routes = (app)=>{
    app.post('/mbp/api/v1/movies', ValidationMovieCreateRequest, movieController.createMovie);
    app.get('/mbp/api/v1/movies',movieController.getMovies);
    app.get('/mbp/api/v1/movies/:id',movieController.getMovie);
    app.delete('/mbp/api/v1/movies/:id',movieController.deleteMovie);
    app.put('/mbp/api/v1/movies/:id',movieController.updateMovie);
}

module.exports = routes
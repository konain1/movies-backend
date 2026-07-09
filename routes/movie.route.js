
const movieController = require('../controllers/movie.controller')

const routes = (app)=>{
    app.post('/mbp/api/v1/movies',movieController.createMovie);
    app.get('/mbp/api/v1/movies',movieController.getMovies);
    app.get('/mbp/api/v1/movies/:id',movieController.getMovie);
    app.delete('/mbp/api/v1/movies/:id',movieController.deleteMovie);
}

module.exports = routes
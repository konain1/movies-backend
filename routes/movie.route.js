
const movieController = require('../controllers/movie.controller')

const routes = (app)=>{
    app.post('/mbp/api/v1/movies',movieController.createMovie);
    app.get('/mbp/api/v1/movies',movieController.getMovies);
    app.delete('/mbp/api/v1/movies/:id',movieController.getMovie);
}

module.exports = routes
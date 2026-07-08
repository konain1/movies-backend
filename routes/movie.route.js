
const movieController = require('../controllers/movie.controller')

const routes = (app)=>{
    app.post('/mbp/api/v1/movies',movieController.createMovie)
}

module.exports = routes
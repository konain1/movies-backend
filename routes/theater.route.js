

const theaterController = require('../controllers/theater.controller')

const routes = (app)=>{
    app.post('/mbp/api/v1/theaters', theaterController.create)
}

module.exports = routes
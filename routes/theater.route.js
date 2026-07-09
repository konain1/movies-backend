
const {validateCreateTheaterRequest} = require('../middlewares/theater.middleware')
const theaterController = require('../controllers/theater.controller')

const routes = (app)=>{
    app.post('/mbp/api/v1/theaters',validateCreateTheaterRequest, theaterController.create)
}

module.exports = routes
const {ErrResponseBody} = require('../utils/responseBody')


const validateCreateTheaterRequest = (req,res,next)=>{

    if(!req.body.name){
        ErrResponseBody.message = "Theater name is not present in the request!"
        return res.status(400).json(ErrResponseBody)
    }

     if(!req.body.pincode){
        ErrResponseBody.message = "Theater pincode is not present in the request!"
        return res.status(400).json(ErrResponseBody)
    }

     if(!req.body.city){
        ErrResponseBody.message = "Theater city is not present in the request!"
        return res.status(400).json(ErrResponseBody)
    }

     if(!req.body.address){
        ErrResponseBody.message = "Theater address is not present in the request!"
        return res.status(400).json(ErrResponseBody)
    }

    next()
}

module.exports = {validateCreateTheaterRequest}
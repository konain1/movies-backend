const movieModel = require('../models/movie.model')






const createMovie =async (req,res)=>{
    try {
        console.log("Received body:", req.body);
        const movie = await movieModel.create(req.body);
return res.status(201).json({
    success:true,
    error:{},
    data:movie,
    message:"successfully created a new movie"
})
        
    } catch (error) {
        console.error("Error creating movie:", error);
        return res.status(500).json({
            success:false,
            error:error.message || error,
            data:{},
            message:"somethng went wrong!"
        })
    }



}

module.exports = { createMovie }
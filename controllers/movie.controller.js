const movieModel = require('../models/movie.model')
const movieService = require('../services/movie.service')



const ErrResponseBody = {
    err:{},
    data:{},
    message:"Something went wrong unable to fetch movie",
    success:false
}




const SuccessResponseBody={
     success: true,
            error: {},
            data: {},
            message: "successfully fetched the movie",
            success:true
}

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

const getMovies = async (req, res) => {
    try {
        const movies = await movieModel.find({});
        return res.status(200).json({
            success: true,
            error: {},
            data: movies,
            message: "successfully fetched all movies"
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({
            success: false,
            error: error.message || error,
            data: {},
            message: "somethng went wrong!"
        });
    }
};

const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
      
        if(response && response.err){
            ErrResponseBody.err = response.err
            return res.status(response.code).json(ErrResponseBody)

        }

        SuccessResponseBody.data = response
        return res.status(200).json(SuccessResponseBody);
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json({
            success: false,
            error: error.message || error,
            data: {},
            message: "somethng went wrong!"
        });
    }
};

const delelteMovie = async (req,res)=>{
    try {
        
        const deletedMovie = await movieModel.deleteOne({_id:req.params.id})

        return res.status(200).json({
            success: true,
            error: {},
            data: delelteMovie,
            message: "successfully deleted the movie"
        });
    } catch (error) {
         console.error("Error deleting movie:", error);
        return res.status(500).json({
            success: false,
            error: error.message || error,
            data: {},
            message: "somethng went wrong!"
        });
    }
}

module.exports = { createMovie, getMovies, getMovie }
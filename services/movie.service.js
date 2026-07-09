const mongoose = require('mongoose');
const movieModel = require('../models/movie.model')

const getMovieById = async(id)=>{
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const movie = await movieModel.findById(id);
        if(!movie){
            return {
                err: "No movie found for the corresponding id provided",
                code: 404
            };
        }
        return movie;
    } catch (error) {
        return {
            err: error.message,
            code: 500
        };
    }
}

module.exports = {getMovieById}
const movieModel = require('../models/movie.model')
const movieService = require('../services/movie.service')
const {SuccessResponseBody,ErrResponseBody} = require('../utils/responseBody')




const createMovie = async (req, res) => {
    try {
        console.log("Received body:", req.body);
        const movie = await movieService.createMovie(req.body)
        return res.status(201).json({
            ...SuccessResponseBody,
            data: movie,
            message: "successfully created a new movie"
        });
    } catch (error) {
        console.error("Error creating movie:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "Something went wrong unable to create movie"
        });
    }
}

const getMovies = async (req, res) => {
    try {
        const movies = await movieModel.find({});
        return res.status(200).json({
            ...SuccessResponseBody,
            data: movies,
            message: "successfully fetched all movies"
        });
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "Something went wrong unable to fetch movies"
        });
    }
};

const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieById(req.params.id);
      
        if (response && response.err) {
            return res.status(response.code).json({
                ...ErrResponseBody,
                err: response.err,
                message: response.err
            });
        }

        return res.status(200).json({
            ...SuccessResponseBody,
            data: response,
            message: "successfully fetched the movie"
        });
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "Something went wrong unable to fetch movie"
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);

        if (response && response.err) {
            return res.status(response.code).json({
                ...ErrResponseBody,
                err: response.err,
                message: response.err
            });
        }

        return res.status(200).json({
            ...SuccessResponseBody,
            data: response,
            message: "successfully deleted the movie"
        });
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "Something went wrong unable to delete movie"
        });
    }
}

module.exports = { createMovie, getMovies, getMovie, deleteMovie }
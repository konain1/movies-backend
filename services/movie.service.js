const mongoose = require('mongoose');
const movieModel = require('../models/movie.model')

const getMovieById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const movie = await movieModel.findById(id);
        if (!movie) {
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

const createMovie = async (data) => {
    const movie = await movieModel.create(data);
    return movie
}

const deleteMovie = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const response = await movieModel.deleteOne({ _id: id });
        if (response.deletedCount === 0) {
            return {
                err: "No movie found for the corresponding id provided to delete",
                code: 404
            };
        }
        return response;
    } catch (error) {
        return {
            err: error.message,
            code: 500
        };
    }
}

const updateMovie = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const movie = await movieModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!movie) {
            return {
                err: "No movie found for the corresponding id provided to update",
                code: 404
            };
        }
        return movie;
    } catch (error) {
        return {
            err: error.message,
            code: error.name === 'ValidationError' ? 400 : 500
        };
    }


}


const fetchMovie = async (filter) => {
    if (!filter || !filter.name) {
        return {
            err: "Movie name query parameter is required",
            code: 400
        };
    }

    try {
        // Using await to execute the query, and findOne to find a single movie by name
        const movie = await movieModel.findOne({ name: filter.name });

        if (!movie) {
            return {
                err: "Not able to find the movie",
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


module.exports = { getMovieById, createMovie, deleteMovie, updateMovie , fetchMovie }
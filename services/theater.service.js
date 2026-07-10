const mongoose = require('mongoose');
const theater = require('../models/theater.model');
const { SuccessResponseBody } = require('../utils/responseBody');

const createTheater = async (data) => {
    try {
        const response = await theater.create(data);
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const deleteTheater = async (id) => {
    id = typeof id === 'string' ? id.trim() : id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const response = await theater.findByIdAndDelete(id)

        if (!response) {
            return {
                err: "No record of theater found for given id",
                code: 404
            }
        }
        return response
    } catch (error) {
        console.log(error)
        return {
            err: error.message,
            code: 500
        };
    }
}

const fetchTheater = async (id) => {


    id = typeof id === 'string' ? id.trim() : id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return {
            err: "Invalid ID format provided",
            code: 400
        };
    }

    try {
        const response = await theater.findOne({ _id: id });
        if (!response) {
            return {
                err: "No theater found for id",
                code: 404
            }
        }
        return response

    } catch (error) {
        console.log(error)
        return {
            err: error.message,
            code: 500
        };
    }



}

const fetchAllTheaters = async (data) => {
    try {
        let query ={}
        let pagination = {}
        if(data && data.city){
            query.city = data.city
        }

        if(data && data.pincode){
            query.pincode = data.pincode
        }

        if(data && data.name){
            query.name = data.name
        }
        if(data && data.limit){
            pagination.limit = data.limit
        }
        if(data && data.skip){
            let perPage =(data.limit) ? data.limit:3
            pagination.skip = data.skip*perPage
        }

        const response = await theater.find(query,{},pagination);
        return response;
    } catch (error) {
        console.log(error);
        return {
            err: error.message,
            code: 500
        };
    }
}



const updateMoviesInsideTheater = async (theaterId, movieIds, insert) => {
    try {
        const Theater = await theater.findById(theaterId);

        if (!Theater) {
            return {
                err: "No such a theater found for the id provided",
                code: 404
            };
        }

        if (insert) {
            movieIds.forEach((movieId) => {
                const alreadyExists = Theater.movies.some(id => id.toString() === movieId.toString());
                if (!alreadyExists) {
                    Theater.movies.push(movieId);
                    console.log("new added")
                }
            });
        } else {
            let savedMovies = Theater.movies;

            movieIds.forEach((mId) => {
                savedMovies = savedMovies.filter((smId) => smId.toString() !== mId.toString());
                console.log("e")
            });

            Theater.movies = savedMovies;
            //  Theater.markModified('movies');
        }

       
        await Theater.save();
        return Theater.populate('movies')
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { createTheater, deleteTheater, fetchTheater, fetchAllTheaters, updateMoviesInsideTheater }
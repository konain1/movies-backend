const theaterService = require('../services/theater.service');
const { SuccessResponseBody, ErrResponseBody } = require('../utils/responseBody');

const create = async (req, res) => {
    try {
        const response = await theaterService.createTheater(req.body);
        return res.status(201).json({
            ...SuccessResponseBody,
            data: response,
            message: "Successfully created the theater"
        });
    } catch (error) {
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to create theater"
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await theaterService.deleteTheater(req.params.id);
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
            message: "successfully destroyed the given Theater"
        });
    } catch (error) {
        console.error("Error deleting theater:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to delete theater"
        });
    }
}
const getTheater = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.trim() : null;
        const response = await theaterService.fetchTheater(id);
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
            message: "successfully fetch the theater"
        });
    } catch (error) {
        console.error("Error fetching theater", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to fetch theater"
        });
    }
}

const getTheaters = async (req, res) => {
    try {
        const response = await theaterService.fetchAllTheaters(req.query);
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
            message: "successfully fetch all the theaters"
        });
    } catch (error) {
        console.error("Error fetching theaters", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to fetch theaters"
        });
    }
}

const updateMovieInTheTheater = async (req, res) => {
    try {
        const response = await theaterService.updateMoviesInsideTheater(req.params.id, req.body.movieIds, req.body.insert);

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
            message: "successfully updated movies in the theater"
        });
    } catch (error) {
        console.error("Error updating movies in theater:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to update movies in theater"
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await theaterService.updateTheater(req.params.id, req.body);

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
            message: "successfully updated theater details"
        });
    } catch (error) {
        console.error("Error updating theater details:", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to update theater details"
        });
    }
}

const findMovieOnTheater = async (req, res) => {
    
    try {
        const response = await theaterService.findMovieInTheTheater(req.params.movieId)

        if (response && response.err) {
            return res.status(response.code).json({
                ...ErrResponseBody,
                err: response.err,
                message:response.err
            })
        }
        return res.status(200).json({
            ...SuccessResponseBody,
            data: response,
            message:'Successfully fetch theaters by movie'
        })
        
    } catch (error) {
        console.log('Error finding theater by movie ', error)
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message:"unable to find theater by movie"
        })
    }
}

module.exports = { create, destroy, getTheater, getTheaters, updateMovieInTheTheater, update, findMovieOnTheater }
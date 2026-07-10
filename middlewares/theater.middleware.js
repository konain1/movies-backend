const mongoose = require('mongoose');
const { ErrResponseBody } = require('../utils/responseBody');

const validateCreateTheaterRequest = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Theater name is required",
            message: "Theater name is not present in the request!"
        });
    }

    if (!req.body.pincode) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Theater pincode is required",
            message: "Theater pincode is not present in the request!"
        });
    }

    if (!req.body.city) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Theater city is required",
            message: "Theater city is not present in the request!"
        });
    }

    if (!req.body.address) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Theater address is required",
            message: "Theater address is not present in the request!"
        });
    }

    next();
}

const validateUpdateMoviesInTheaterRequest = (req, res, next) => {
    const id = req.params.id ? req.params.id.trim() : null;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Invalid Theater ID format provided",
            message: "Invalid Theater ID format provided"
        });
    }

    if (!req.body) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Request body is missing",
            message: "Request body is missing. Ensure you are sending JSON with Content-Type: application/json"
        });
    }

    if (req.body.insert === undefined || typeof req.body.insert !== 'boolean') {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Field 'insert' must be a boolean",
            message: "Field 'insert' must be a boolean (true/false) in the request body"
        });
    }

    if (!req.body.movieIds || !Array.isArray(req.body.movieIds) || req.body.movieIds.length === 0) {
        return res.status(400).json({
            ...ErrResponseBody,
            err: "Field 'movieIds' must be a non-empty array",
            message: "Field 'movieIds' must be a non-empty array of movie IDs in the request body"
        });
    }

    // Validate that each movie ID in the array is a valid MongoDB ObjectId
    for (const movieId of req.body.movieIds) {
        const trimmedMovieId = typeof movieId === 'string' ? movieId.trim() : movieId;
        if (!mongoose.Types.ObjectId.isValid(trimmedMovieId)) {
            return res.status(400).json({
                ...ErrResponseBody,
                err: `Invalid movie ID format: ${movieId}`,
                message: `Invalid movie ID format provided in movieIds array: ${movieId}`
            });
        }
    }

    next();
}

module.exports = { validateCreateTheaterRequest, validateUpdateMoviesInTheaterRequest }
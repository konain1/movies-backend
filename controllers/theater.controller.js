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
        let response;
        const id = req.params.id ? req.params.id.trim() : null;

        if (id && id !== '') {
            response = await theaterService.fetchTheater(id);
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
        } else {
            response = await theaterService.fetchAllTheaters();
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
        }
    } catch (error) {
        console.error("Error fetching theater", error);
        return res.status(500).json({
            ...ErrResponseBody,
            err: error.message || error,
            message: "unable to fetch theater"
        });
    }
}

module.exports = { create, destroy, getTheater }
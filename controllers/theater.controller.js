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

module.exports = { create }
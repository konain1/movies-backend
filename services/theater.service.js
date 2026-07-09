
const theater = require('../models/theater.model')

const createTheater = async (data) => {

    try {
        const response = await theater.create(data);
        return response
    } catch (error) {
        console.log(error)
        throw error
    }

}

module.exports = { createTheater }
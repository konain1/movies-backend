
const BadRequestBody={
    success:false,
    err:"",
    data:{},
    message:"Bad Request"
}


const ValidationMovieCreateRequest = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The name of the movie not found in the body"
        });
    }

    if (!req.body.description) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The description of the movie not found in the body"
        });
    }

    if (!req.body.casts || !Array.isArray(req.body.casts) || req.body.casts.length === 0) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The casts of the movie must be a non-empty array"
        });
    }

    if (!req.body.trailerUrl) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The trailerUrl of the movie not found in the body"
        });
    }

    if (!req.body.releaseDate) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The releaseDate of the movie not found in the body"
        });
    }

    if (!req.body.director) {
        return res.status(400).json({
            ...BadRequestBody,
            err: "The director of the movie not found in the body"
        });
    }

    next();
}

module.exports = { ValidationMovieCreateRequest }
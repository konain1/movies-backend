

const ErrResponseBody = {
    err:{},
    data:{},
    message:"Something went wrong unable to fetch movie",
    success:false
}




const SuccessResponseBody={
     success: true,
            error: {},
            data: {},
            message: "successfully fetched the movie",
            success:true
}

module.exports = {SuccessResponseBody,ErrResponseBody}
module.exports = (res, statusCode, message) => {
    res.status(statusCode).json({
            success:-1,
            message,
    });
};
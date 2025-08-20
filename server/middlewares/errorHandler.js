
function errorHandler(err, req, res, next) {
    let status = 500;
    let name = err.name || 'Internal Server Error';
    let message = 'Internal Server Error';

    switch (err.name) {
        // 400 Bad Request
        case 'BadRequest': {
            status = 400;
            message = err.message || 'Bad Request';
            break;
        }
        case 'SequelizeValidationError': {
            status = 400;
            message = err.errors[0]?.message || 'Validation error';
            break;
        }
        case 'SequelizeUniqueConstraintError': {
            status = 400;
            message = err.errors[0]?.message || 'Unique constraint error';
            break;
        }
        // 401 Unauthorized
        case 'Unauthorized': {
            status = 401;
            message = err.message || 'Unauthorized';
            break;
        }
        case 'JsonWebTokenError':
            status = 401;
            message = 'Invalid token';
            break;
        // 403 Forbidden
        case 'Forbidden': {
            status = 403;
            message = err.message || 'Forbidden';
            break;
        }
        // 404 Not Found
        case 'NotFound': {
            status = 404;
            message = err.message || 'Resource not found';
            break;
        }
        // Default (500 or custom)
        default:
            if (err.status) {
                status = err.status;
                message = err.message;
            }
            break;
    }

    res.status(status).json({ name,message });
}

module.exports = errorHandler;

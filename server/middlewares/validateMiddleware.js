const validate = (schema) => async (req, res, next) => {
    try {
        // Validate the request body using the provided schema
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody; // Assign the validated data back to req.body
        next(); // Proceed to the next middleware
    } catch (err) {
        // Error handling
        const status = 400; // Bad Request
        const message = "Input Error"; // General message for the client
        
        // Ensure 'err' is correctly used and details are properly extracted
        const extraDetails = err.errors ? err.errors.map(e => e.message).join(', ') : 'Validation failed';

        // Log error details for debugging
        console.log(extraDetails);

        // Create an error object
        const error = {
            status,
            message,
            extraDetails
        };

        // Pass the error object to the next middleware (error handler)
        next(error);
    }
};

module.exports = validate;

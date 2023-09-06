const express = require('express');
const app = express();

// Enum for error types
const ErrorType = {
  MISSING_PARAMETER: 'missing_parameter_error',
  DATA_BASE_ERROR: 'data_base_error',
};

// Custom error class
class CustomError extends Error {
  constructor(type, message) {
    super(message);
    this.name = type;
    this.type = type;
  }
}

// Middleware to handle errors
function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(400).json({
      error: {
        type: err.type,
        message: err.message
      }
    });
  } else {
    res.status(500).json({
      error: {
        type: 'internal_server_error',
        message: 'An unexpected error occurred.'
      }
    });
  }
}

// Middleware to check for missing parameters
function checkMissingParameter(req, res, next) {
  const missingParams = [];
  
  if (!req.query.param1) {
    missingParams.push('param1');
  }
  
  if (!req.query.param2) {
    missingParams.push('param2');
  }
  
  if (missingParams.length > 0) {
    const errorMessage = `Missing parameter(s): ${missingParams.join(', ')}`;
    const error = new CustomError(ErrorType.MISSING_PARAMETER, errorMessage);
    next(error);
  } else {
    next();
  }
}

app.use(express.json());
app.get('/example', checkMissingParameter, (req, res) => {

  const param1 = req.query.param1;
  const param2 = req.query.param2;
  
  res.json({
    param1,
    param2
  });
});


app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
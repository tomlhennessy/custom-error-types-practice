class ValidationError extends Error {
  constructor(message = 'Invalid input') {
    super(message); // Call the parent class constructor with the message
    this.name = 'ValidationError'; // Set the name property to "ValidationError"
    // capture stack trace if available
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}

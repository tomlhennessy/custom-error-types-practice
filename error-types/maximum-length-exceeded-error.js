const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength) {
    const message = excessLength
      ? `Maximum length exceeded by ${excessLength}`
      : 'Maximum length exceeded';
    super(message); // Call the parent class constructor with the message
    this.name = 'MaximumLengthExceededError'; // Set the name property
    // Capture stack trace if available
    if (Error.capturStackTrace) {
      Error.captureStackTrace(this, MaximumLengthExceededError)
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}

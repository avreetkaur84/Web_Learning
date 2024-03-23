// All the properties of Error class are not in the ExpressError also. OOPS concept.
class ExpressError extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;
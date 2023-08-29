type ErrorName = 'REQUIRED_PARAMETERS_IN_LOG_MISSING';

export class RequiredParamsValidatorError extends Error {
    name: ErrorName;

    message: string;

    cause: any;

    constructor({ name, message, cause }: { name: ErrorName; message: string; cause?: any }) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}
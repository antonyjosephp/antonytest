import { Logging } from '@google-cloud/logging';
import * as api from '@opentelemetry/api';

import { LogLevel } from './LogLevel';
/**
 * @class Class that implements Logging functionality. The logs are sent to GCP project.
 * @method writeLog - Static method that writes all the logs ( except ERROR ) to GCP.
 * @example writeLog Example
     * const message = JSON.stringify({
                SEVERITY: LogLevel.INFO,
                SOURCE_PATH: '< Page Name / Path that is generating this log >',
                LOG_MESSAGE: '< Message that needs to be logged >',
                ADDTIONAL_PARAMETERS: [
                    {
                        'Param 1 ': 'Value 1',
                        'Param 2' : 'Value 2',
                        'Param N': 'Value N',
                    },
                ],
            });
 * @method logError - Static method that writes ONLY ERROR logs to GCP.
 * @example logError Example
     *  const message = JSON.stringify({
                SEVERITY: LogLevel.ERROR,
                SOURCE_PATH: '< Page Name / Path that is generating this log >',
                LOG_MESSAGE: '< Message that needs to be logged >',
                ADDTIONAL_PARAMETERS: [
                    {
                        'Param 1 ': 'Value 1',
                        'Param 2' : 'Value 2',
                        'Param N': 'Value N',
                    },
                ],
            });
 */
export class Logger {
    static APPLICATION_NAME = process.env.APPLICATION_NAME;

    static GCP_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;

    static GCP_PROJECT_LOG_NAME = process.env.GOOGLE_PROJECT_LOG_NAME;

    static arrayDifference(requiredKeysFromEnv: string | any[], keysFromLogCaller: string | any[]) {
        const difference = [];

        for (let i = 0; i < requiredKeysFromEnv.length; i++) {
            if (keysFromLogCaller.indexOf(requiredKeysFromEnv[i]) === -1) {
                difference.push(requiredKeysFromEnv[i]);
            }
        }

        return difference;
    }

    /**
     * Static method that writes all the logs ( except ERROR ) to GCP.
     * @param message The JSON structured message that needs to be logged
     * @returns SUCCESS_LOG_MESSAGE / REQUIRED_PARAMETERS_MISSING
     * @example The JSON message should be constructed as below
     * const message = JSON.stringify({
                SEVERITY: LogLevel.INFO,
                SOURCE_PATH: '< Page Name / Path that is generating this log >',
                LOG_MESSAGE: '< Message that needs to be logged >',
                ADDTIONAL_PARAMETERS: [
                    {
                        'Param 1 ': 'Value 1',
                        'Param 2' : 'Value 2',
                        'Param N': 'Value N',
                    },
                ],
            });
     */
    static writeLog(message: string) {
        try {
            const logging = new Logging({ projectId: this.GCP_PROJECT_ID });
            const log = logging.log(this.GCP_PROJECT_LOG_NAME!);
            const REQUIRED_PARAMS = process.env.REQUIRED_LOG_PARAMETERS;
            const key1 = REQUIRED_PARAMS?.split(',');
            const parsedMessage = JSON.parse(message);
            const parsedKeys = Object.keys(parsedMessage);
            const index = parsedKeys.indexOf('additionalParameters');
            parsedKeys.splice(index, 3);
            const isEqual = JSON.stringify(key1) === JSON.stringify(parsedKeys);
            if (isEqual) {
                const metadata = {
                    severity: parsedMessage.severity,
                    resource: {
                        type: 'global',
                    },
                };
                delete parsedMessage.severity;
                const customAttributes = parsedMessage;
                customAttributes.applicationName = this.APPLICATION_NAME;
                customAttributes.traceID = api.trace.getSpanContext(api.context.active())?.traceId.toString();
                const entryData = { ...customAttributes };
                const entry = log.entry(metadata, entryData);
                log.write(entry);
            } else {
                const difference = Logger.arrayDifference(key1!, parsedKeys);
                throw new Error('Following required parameters are missing from writelog method : ' + difference);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    /**
     * Static method that writes ONLY ERROR logs to GCP.
     * @param message The JSON structured message that needs to be logged
     * @returns SUCCESS_LOG_MESSAGE
     * @example The JSON message should be constructed as below
     *  const message = JSON.stringify({
                SEVERITY: LogLevel.ERROR,
                SOURCE_PATH: '< Page Name / Path that is generating this log >',
                LOG_MESSAGE: '< Message that needs to be logged >',
                ADDTIONAL_PARAMETERS: [
                    {
                        'Param 1 ': 'Value 1',
                        'Param 2' : 'Value 2',
                        'Param N': 'Value N',
                    },
                ],
            });
     */
    static logError(message: string) {
        try {
            const logging = new Logging({ projectId: this.GCP_PROJECT_ID });
            const log = logging.log(this.GCP_PROJECT_LOG_NAME!);
            const REQUIRED_PARAMS = process.env.REQUIRED_ERROR_LOG_PARAMETERS;
            const key1 = REQUIRED_PARAMS?.split(',');
            const parsedMessage = JSON.parse(message);
            const parsedKeys = Object.keys(parsedMessage);
            const index = parsedKeys.indexOf('additionalParameters');
            parsedKeys.splice(index, 3);
            const isEqual = JSON.stringify(key1) === JSON.stringify(parsedKeys);
            if (isEqual) {
                const metadata = {
                    severity: LogLevel.ERROR,
                    resource: {
                        type: 'global',
                    },
                };
                delete parsedMessage.severity;
                const customAttributes = parsedMessage;
                customAttributes.applicationName = this.APPLICATION_NAME;
                customAttributes.traceID = api.trace.getSpanContext(api.context.active())?.traceId.toString();
                const entryData = { ...customAttributes };
                const entry = log.entry(metadata, entryData);
                log.write(entry);
            } else {
                const difference = Logger.arrayDifference(key1!, parsedKeys);
                throw new Error('Following REQUIRED parameters are missing from logError method : ' + difference);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}

module.exports = { Logger };

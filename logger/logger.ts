import * as pine from "pine";

const logger = pine();

export class APILogger {
    info(message, data) {
        logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }
}
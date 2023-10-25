import winston from 'winston';

const customOptions = {
    colors: {
        info: "blue",
        error: "red",
        warn: "yellow",
        http: "magenta",
    }
};


export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: "http",
            format:
                winston.format.combine(
                    winston.format.colorize({ colors: customOptions.colors }),
                    winston.format.simple())
    }),
        new winston.transports.File({ filename: "error.log", level: "info" })
    ]
});

export const addLogger = (req, res, next) => {
    req.logger = logger;
    let time = new Date().toISOString();
    req.logger.http(`${req.method} ${req.url} - ${time}`);
    next();
}
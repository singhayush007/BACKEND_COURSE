import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logMiddleware = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
    const logFile = path.join(__dirname, "logs", "requests.log");

    fs.appendFile(logFile, log, (err) => {
        if (err) console.error("Failed to log request:", err);
    })
    next();
};
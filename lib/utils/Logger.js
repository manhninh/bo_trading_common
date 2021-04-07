"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
if (!fs_1.existsSync(path_1.default.resolve(__dirname, `../logs`))) {
    fs_1.mkdirSync(path_1.default.resolve(__dirname, `../logs`));
}
exports.default = winston_1.default.createLogger({
    exitOnError: false,
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp(), winston_1.default.format.align(), winston_1.default.format.printf(info => `[${moment_1.default(info.timestamp).format('YYYY-MM-DD HH:mm:ss')}] ${info.level}: ${info.message}`)),
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.simple(),
        }),
        new winston_1.default.transports.File({
            filename: path_1.default.resolve(__dirname, `../logs/${moment_1.default().format('YYYY-MM-DD HH')}-00.log`),
        }),
    ],
});

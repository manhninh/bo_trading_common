"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.notFoundMiddleware = void 0;
const Logger_1 = __importDefault(require("./Logger"));
const notFoundMiddleware = (req, res) => {
    Logger_1.default.error(`NOT FOUND URL: ${req.path}`);
    res.status(404).send({ error_description: `Not found URL ${req.path}` });
};
exports.notFoundMiddleware = notFoundMiddleware;
const errorMiddleware = (err, req, res, _next) => {
    Logger_1.default.error(`API ERROR- ${req.path}: ${err.message}`);
    if (err.code === 403)
        res.status(err.code).send({ type: err.type, error_description: err.message });
    else
        res.status(500).send({ error_description: err.message });
};
exports.errorMiddleware = errorMiddleware;

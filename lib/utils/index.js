"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = exports.errorMiddleware = exports.logger = void 0;
const Exceptions_1 = require("./Exceptions");
Object.defineProperty(exports, "errorMiddleware", { enumerable: true, get: function () { return Exceptions_1.errorMiddleware; } });
Object.defineProperty(exports, "notFoundMiddleware", { enumerable: true, get: function () { return Exceptions_1.notFoundMiddleware; } });
const Logger_1 = __importDefault(require("./Logger"));
exports.logger = Logger_1.default;

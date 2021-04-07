"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailConfig {
    constructor(config) {
        this._transporter = nodemailer_1.default.createTransport(config);
    }
    send(from, to, subject, body, attachments) {
        try {
            return this._transporter.sendMail({ from, to, subject, html: body, attachments });
        }
        catch (error) {
            throw error;
        }
    }
    readHTMLFile(path, callback) {
        fs_1.readFile(path, { encoding: 'utf-8' }, (err, html) => {
            if (err)
                throw err;
            else
                callback(html);
        });
    }
}
exports.default = EmailConfig;

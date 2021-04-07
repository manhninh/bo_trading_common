"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const mongoose_1 = __importStar(require("mongoose"));
class UserSchema {
    static get schema() {
        const schema = new mongoose_1.default.Schema({
            username: { type: mongoose_1.Schema.Types.String, required: true, unique: true },
            email: { type: mongoose_1.Schema.Types.String, index: true, required: true, unique: true },
            salt: { type: mongoose_1.Schema.Types.String, required: true },
            hashed_password: { type: mongoose_1.Schema.Types.String, required: true },
            full_name: { type: mongoose_1.Schema.Types.String, default: '' },
            phone: { type: mongoose_1.Schema.Types.String },
            type_user: { type: mongoose_1.Schema.Types.Number, required: true, default: 0 },
            user_parent_id: { type: mongoose_1.Schema.Types.ObjectId },
            tfa: { type: mongoose_1.Schema.Types.String },
            commission_level: { type: mongoose_1.Schema.Types.Array },
            ref_code: { type: mongoose_1.Schema.Types.String },
            amount: { type: mongoose_1.Schema.Types.Number, required: true, default: 0 },
            verify_code: { type: mongoose_1.Schema.Types.String },
            status: { type: mongoose_1.Schema.Types.Number, required: true, default: 0 },
        }, {
            timestamps: true,
        });
        schema
            .virtual('password')
            .set(function (password) {
            this._plain_password = password;
            const salt = crypto_1.randomBytes(128).toString('hex');
            this.salt = salt;
            const hashedPassword = this.encryptPassword(password);
            this.hashed_password = hashedPassword;
        })
            .get(function () {
            return this._plain_password;
        });
        schema.methods.encryptPassword = function (password) {
            return crypto_1.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        };
        schema.methods.checkPassword = function (password) {
            return this.encryptPassword(password) === this.hashed_password;
        };
        return schema;
    }
}
exports.default = mongoose_1.default.model('users', UserSchema.schema);

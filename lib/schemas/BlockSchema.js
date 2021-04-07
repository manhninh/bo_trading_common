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
const mongoose_1 = __importStar(require("mongoose"));
class BlockSchema {
    static get schema() {
        const schema = new mongoose_1.default.Schema({
            symbol: { type: mongoose_1.Schema.Types.String, required: true },
            event_time: { type: mongoose_1.Schema.Types.Date, required: true },
            open: { type: mongoose_1.Schema.Types.Number, required: true },
            close: { type: mongoose_1.Schema.Types.Number, required: true },
            high: { type: mongoose_1.Schema.Types.Number, required: true },
            low: { type: mongoose_1.Schema.Types.Number, required: true },
            volume: { type: mongoose_1.Schema.Types.Number, required: true },
            is_open: { type: mongoose_1.Schema.Types.Boolean, required: true },
        });
        return schema;
    }
}
exports.default = mongoose_1.default.model('blocks', BlockSchema.schema);

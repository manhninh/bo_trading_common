"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockModel {
    constructor(obj) {
        this._blockModel = obj;
    }
    get symbol() {
        return this._blockModel.symbol;
    }
    get event_time() {
        return this._blockModel.event_time;
    }
    get open() {
        return this._blockModel.open;
    }
    get close() {
        return this._blockModel.close;
    }
    get high() {
        return this._blockModel.high;
    }
    get low() {
        return this._blockModel.low;
    }
    get volume() {
        return this._blockModel.volume;
    }
    get is_open() {
        return this._blockModel.is_open;
    }
}
exports.default = BlockModel;

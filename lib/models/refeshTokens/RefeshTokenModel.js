"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RefeshTokenModel {
    constructor(RefeshTokenModel) {
        this._refeshTokenModel = RefeshTokenModel;
    }
    get user_id() {
        return this._refeshTokenModel.user_id;
    }
    get client_id() {
        return this._refeshTokenModel.client_id;
    }
    get token() {
        return this._refeshTokenModel.token;
    }
    get createdAt() {
        return this._refeshTokenModel.createdAt;
    }
}
exports.default = RefeshTokenModel;

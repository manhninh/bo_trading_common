"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessTokenModel {
    constructor(AccessTokenModel) {
        this._AccessTokenModel = AccessTokenModel;
    }
    get user_id() {
        return this._AccessTokenModel.user_id;
    }
    get client_id() {
        return this._AccessTokenModel.client_id;
    }
    get token() {
        return this._AccessTokenModel.token;
    }
    get createdAt() {
        return this._AccessTokenModel.createdAt;
    }
}
exports.default = AccessTokenModel;

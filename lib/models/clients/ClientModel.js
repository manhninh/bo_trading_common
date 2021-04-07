"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientModel {
    constructor(ClientModel) {
        this._clientModel = ClientModel;
    }
    get client_id() {
        return this._clientModel.client_id;
    }
    get client_secret() {
        return this._clientModel.client_secret;
    }
    get name() {
        return this._clientModel.name;
    }
}
exports.default = ClientModel;

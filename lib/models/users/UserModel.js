"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(UserModel) {
        this._userModel = UserModel;
    }
    get full_name() {
        return this._userModel.full_name;
    }
    get username() {
        return this._userModel.username;
    }
    get email() {
        return this._userModel.email;
    }
    get salt() {
        return this._userModel.salt;
    }
    get hashed_password() {
        return this._userModel.hashed_password;
    }
    get phone() {
        return this._userModel.phone;
    }
    get type_user() {
        return this._userModel.type_user;
    }
    get user_parent_id() {
        return this._userModel.user_parent_id;
    }
    get tfa() {
        return this._userModel.tfa;
    }
    get commission_level() {
        return this._userModel.commission_level;
    }
    get ref_code() {
        return this._userModel.ref_code;
    }
    get amount() {
        return this._userModel.amount;
    }
    get verify_code() {
        return this._userModel.verify_code;
    }
    get status() {
        return this._userModel.status;
    }
}
exports.default = UserModel;

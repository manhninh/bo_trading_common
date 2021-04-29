import IUserModel from './IAdminModel';

export default class UserModel {
  private _userModel: IUserModel;

  constructor(UserModel: IUserModel) {
    this._userModel = UserModel;
  }

  get email(): string {
    return this._userModel.email;
  }

  get salt(): string {
    return this._userModel.salt;
  }

  get hashed_password(): string {
    return this._userModel.hashed_password;
  }

  get tfa(): string {
    return this._userModel.tfa;
  }
}

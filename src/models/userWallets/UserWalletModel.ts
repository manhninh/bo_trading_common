import IUserWalletModel from './IUserWalletModel';

export default class UserWalletModel {
  private _userWalletModel: IUserWalletModel;

  constructor(UserWalletModel: IUserWalletModel) {
    this._userWalletModel = UserWalletModel;
  }

  get user_id(): string {
    return this._userWalletModel.user_id;
  }

  get amount(): number {
    return this._userWalletModel.amount;
  }

  get amount_trade(): number {
    return this._userWalletModel.amount_trade;
  }

  get amount_demo(): number {
    return this._userWalletModel.amount_demo;
  }

  get amount_expert(): number {
    return this._userWalletModel.amount_expert;
  }

  get amount_copytrade(): number {
    return this._userWalletModel.amount_copytrade;
  }

  get trc20(): string {
    return this._userWalletModel.trc20;
  }

  get erc20(): string {
    return this._userWalletModel.erc20;
  }

  get enable_withdraw(): boolean {
    return this._userWalletModel.enable_withdraw;
  }
}

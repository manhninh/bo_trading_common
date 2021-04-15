import IUserTransactionsModel from './IUserTransactionsModel';

export default class UserTransactionsModel {
  private _userTransactionsModel: IUserTransactionsModel;

  constructor(UserTransactionsModel: IUserTransactionsModel) {
    this._userTransactionsModel = UserTransactionsModel;
  }

  get user_id(): string {
    return this._userTransactionsModel.user_id;
  }

  get to_user_id(): string {
    return this._userTransactionsModel.to_user_id;
  }

  get amount(): number {
    return this._userTransactionsModel.amount;
  }

  get symbol(): string {
    return this._userTransactionsModel.symbol;
  }

  get address(): string {
    return this._userTransactionsModel.address;
  }

  get tx(): string {
    return this._userTransactionsModel.tx;
  }

  get status(): number {
    return this._userTransactionsModel.status;
  }

  get type(): number {
    return this._userTransactionsModel.type;
  }

  get noted(): string {
    return this._userTransactionsModel.noted;
  }

  get fee(): number {
    return this._userTransactionsModel.fee;
  }
}

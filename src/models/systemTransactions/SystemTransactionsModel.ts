import ISystemTransactionsModel from './ISystemTransactionsModel';

export default class SystemTransactionsModel {
  private _systemTransactionsModel: ISystemTransactionsModel;

  constructor(SystemTransactionsModel: ISystemTransactionsModel) {
    this._systemTransactionsModel = SystemTransactionsModel;
  }

  get user_id(): string {
    return this._systemTransactionsModel.user_id;
  }

  get amount(): number {
    return this._systemTransactionsModel.amount;
  }

  get symbol(): string {
    return this._systemTransactionsModel.symbol;
  }

  get address(): string {
    return this._systemTransactionsModel.address;
  }

  get tx(): string {
    return this._systemTransactionsModel.tx;
  }

  get status(): number {
    return this._systemTransactionsModel.status;
  }

  get noted(): string {
    return this._systemTransactionsModel.noted;
  }

  get response(): object {
    return this._systemTransactionsModel.response;
  }
}

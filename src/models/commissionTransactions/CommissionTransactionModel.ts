import ICommissionTransactionModel from './ICommissionTransactionModel';

export default class CommissionTransactionModel {
  private _commissionTransactionModel: ICommissionTransactionModel;

  constructor(CommissionTransactionModel: ICommissionTransactionModel) {
    this._commissionTransactionModel = CommissionTransactionModel;
  }

  get type_commission(): number {
    return this._commissionTransactionModel.type_commission;
  }

  get id_user(): string {
    return this._commissionTransactionModel.id_user;
  }

  get amount(): number {
    return this._commissionTransactionModel.amount;
  }
}

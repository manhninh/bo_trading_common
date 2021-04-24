import ICommissionModel from './ICommissionModel';

export default class CommissionModel {
  private _commissionModel: ICommissionModel;

  constructor(CommissionModel: ICommissionModel) {
    this._commissionModel = CommissionModel;
  }

  get type_commission(): number {
    return this._commissionModel.type_commission;
  }

  get id_user(): string {
    return this._commissionModel.id_user;
  }

  get id_user_ref(): string {
    return this._commissionModel.id_user_ref;
  }

  get id_history(): string {
    return this._commissionModel.id_history;
  }

  get level(): number {
    return this._commissionModel.level;
  }

  get investment_amount(): number {
    return this._commissionModel.investment_amount;
  }

  get commission(): number {
    return this._commissionModel.commission;
  }

  get is_withdraw(): boolean {
    return this._commissionModel.is_withdraw;
  }
}

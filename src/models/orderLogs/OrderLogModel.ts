import IOrderLogModelModel from './IOrderLogModel';

export default class OrderLogModelModel {
  private _orderLogModelModel: IOrderLogModelModel;

  constructor(OrderLogModelModel: IOrderLogModelModel) {
    this._orderLogModelModel = OrderLogModelModel;
  }

  get logs(): string {
    return this._orderLogModelModel.logs;
  }
}

import IOrderModelModel from './IOrderModel';

export default class OrderModelModel {
  private _orderModelModel: IOrderModelModel;

  constructor(OrderModelModel: IOrderModelModel) {
    this._orderModelModel = OrderModelModel;
  }

  get order_uuid(): string {
    return this._orderModelModel.order_uuid;
  }

  get user_id(): string {
    return this._orderModelModel.user_id;
  }

  get open_order(): number {
    return this._orderModelModel.open_order;
  }

  get close_order(): number {
    return this._orderModelModel.close_order;
  }

  get status_order(): boolean {
    return this._orderModelModel.status_order;
  }

  get amount_order(): number {
    return this._orderModelModel.amount_order;
  }

  get is_expert(): boolean {
    return this._orderModelModel.is_expert;
  }

  get status(): boolean {
    return this._orderModelModel.status;
  }
}

import ITradeHistoryModel from './ITradeHistoryModel';

export default class TradeHistoryModel {
  private _tradeHistoryModel: ITradeHistoryModel;

  constructor(TradeHistoryModel: ITradeHistoryModel) {
    this._tradeHistoryModel = TradeHistoryModel;
  }

  get order_uuid(): string {
    return this._tradeHistoryModel.order_uuid;
  }

  get user_id(): string {
    return this._tradeHistoryModel.user_id;
  }

  get buy_amount_order(): number {
    return this._tradeHistoryModel.buy_amount_order;
  }

  get sell_amount_order(): number {
    return this._tradeHistoryModel.sell_amount_order;
  }

  get open_result(): number {
    return this._tradeHistoryModel.open_result;
  }

  get close_result(): number {
    return this._tradeHistoryModel.close_result;
  }

  get amount_result(): number {
    return this._tradeHistoryModel.amount_result;
  }

  get type(): number {
    return this._tradeHistoryModel.type;
  }

  get expert_id(): string {
    return this._tradeHistoryModel.expert_id;
  }
}

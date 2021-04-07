import ITradeHistoryModel from './ITradeHistoryModel';

export default class TradeHistoryModel {
  private _tradeHistoryModel: ITradeHistoryModel;

  constructor(TradeHistoryModel: ITradeHistoryModel) {
    this._tradeHistoryModel = TradeHistoryModel;
  }

  get user_id(): string {
    return this._tradeHistoryModel.user_id;
  }

  get open_order(): number {
    return this._tradeHistoryModel.open_order;
  }

  get close_order(): number {
    return this._tradeHistoryModel.close_order;
  }

  get status_order(): boolean {
    return this._tradeHistoryModel.status_order;
  }

  get amount_order(): number {
    return this._tradeHistoryModel.amount_order;
  }

  get open_result(): number {
    return this._tradeHistoryModel.open_result;
  }

  get close_result(): number {
    return this._tradeHistoryModel.close_result;
  }

  get status_result(): boolean {
    return this._tradeHistoryModel.status_result;
  }

  get amount_result(): number {
    return this._tradeHistoryModel.amount_result;
  }

  get type(): number {
    return this._tradeHistoryModel.type;
  }

  get history_parent_id(): string {
    return this._tradeHistoryModel.history_parent_id;
  }

  get expert_id(): string {
    return this._tradeHistoryModel.expert_id;
  }
}

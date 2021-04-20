import mongoose from 'mongoose';

export default interface ITradeHistoryModel extends mongoose.Document {
  // uuid order
  order_uuid?: string;
  // user id ref from table users
  user_id: string;
  // buy amount order
  buy_amount_order: number;
  // sell amount order
  sell_amount_order: number;
  // the opening price of the outcome candle
  open_result: number;
  // the closing price of the outcome candle
  close_result: number;
  // amount received
  amount_result: number;
  // 0: lệnh từ hệ thống trade - 1: lệnh được copy từ hệ thống copy trade
  type?: number;
  // id user expert
  expert_id?: string;
}

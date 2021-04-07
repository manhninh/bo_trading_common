import mongoose from 'mongoose';

export default interface ITradeHistoryModel extends mongoose.Document {
  // user id ref from table users
  user_id: string;
  // the opening price of the entry candle
  open_order: number,
  // the closing price of the entry candle
  close_order: number,
  // status order --> 0: buy - 1: sell
  status_order: boolean,
  // amount of the order
  amount_order: number,
  // the opening price of the outcome candle
  open_result: number,
  // the closing price of the outcome candle
  close_result: number,
  // 0: win - 1: loss
  status_result: boolean,
  // amount received
  amount_result: number,
  // 0: lệnh từ hệ thống trade - 1: lệnh được copy từ hệ thống copy trade
  type: number,
  // id của lệnh copy
  history_parent_id: string,
  // id user expert
  expert_id: string,
}

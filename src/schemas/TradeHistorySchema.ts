import mongoose, { Schema } from 'mongoose';
import ITradeHistoryModel from '../models/tradeHistories/ITradeHistoryModel';

class TradeHistorySchema {
  static get schema() {
    const schema = new mongoose.Schema({
      user_id: { type: Schema.Types.ObjectId, required: true },
      open_order: { type: Schema.Types.Number, required: true },
      close_order: { type: Schema.Types.Number, required: true },
      /** 0: buy - 1: sell */
      status_order: { type: Schema.Types.Boolean, required: true },
      amount_order: { type: Schema.Types.Number, required: true },
      open_result: { type: Schema.Types.Number, required: true },
      close_result: { type: Schema.Types.Number, required: true },
      /** 0: win - 1: loss */
      status_result: { type: Schema.Types.Boolean, required: true },
      amount_result: { type: Schema.Types.Number, required: true },
      /** 0: lệnh từ hệ thống trade - 1: lệnh được copy từ hệ thống copy trade */
      type: { type: Schema.Types.Number, required: true },
      /** id của lệnh copy */
      history_parent_id: { type: Schema.Types.ObjectId },
      expert_id: { type: Schema.Types.ObjectId },
    }, {
      timestamps: true
    });
    return schema;
  }
}

export default mongoose.model<ITradeHistoryModel>('trade_histories', TradeHistorySchema.schema);

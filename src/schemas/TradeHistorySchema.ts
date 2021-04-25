import mongoose, {Schema} from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import ITradeHistoryModel from '../models/tradeHistories/ITradeHistoryModel';

class TradeHistorySchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        /** uuid order */
        order_uuid: {type: Schema.Types.String, required: true},
        user_id: {type: Schema.Types.ObjectId, required: true},
        buy_amount_order: {type: Schema.Types.Number, required: true, default: 0},
        sell_amount_order: {type: Schema.Types.Number, required: true, default: 0},
        open_result: {type: Schema.Types.Number, required: true},
        close_result: {type: Schema.Types.Number, required: true},
        amount_result: {type: Schema.Types.Number, required: true, default: 0},
        /** 0: lệnh từ hệ thống trade - 1: Lệnh từ hệ thống demo - 2: lệnh được copy từ hệ thống copy trade */
        type: {type: Schema.Types.Number, required: true},
        expert_id: {type: Schema.Types.ObjectId},
      },
      {
        timestamps: true,
      },
    );

    schema.plugin(aggregatePaginate);
    return schema;
  }
}

export default mongoose.model<ITradeHistoryModel>('trade_histories', TradeHistorySchema.schema);

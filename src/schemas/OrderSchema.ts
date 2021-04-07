import IOrderModel from '@src/models/orders/IOrderModel';
import mongoose, { Schema } from 'mongoose';

class OrderSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      order_uuid: { type: Schema.Types.String, required: true },
      user_id: { type: Schema.Types.ObjectId, required: true },
      open_order: { type: Schema.Types.Number, required: true },
      close_order: { type: Schema.Types.Number, required: true },
      /** 0: buy - 1: sell */
      status_order: { type: Schema.Types.Boolean, required: true },
      amount_order: { type: Schema.Types.Number, required: true },
      /** chuyên gia đi lệnh từ hệ thống copy trade */
      is_expert: { type: Schema.Types.Boolean },
      /** 0: inprocess - 1: done */
      status: { type: Schema.Types.Boolean, required: true },
    }, {
      timestamps: true
    });
    return schema;
  }
}

export default mongoose.model<IOrderModel>('orders', OrderSchema.schema);

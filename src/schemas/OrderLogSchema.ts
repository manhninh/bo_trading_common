import mongoose, {Schema} from 'mongoose';
import IOrderLogModel from '../models/orderLogs/IOrderLogModel';

class OrderLogSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        logs: {type: Schema.Types.String, required: true},
      },
      {
        timestamps: true,
      },
    );
    return schema;
  }
}

export default mongoose.model<IOrderLogModel>('order_logs', OrderLogSchema.schema);

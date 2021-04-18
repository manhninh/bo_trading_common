import mongoose, {Schema} from 'mongoose';
import IQueueLogModel from '../models/queueLogs/IQueueLogModel';

class QueueLogSchema {
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

export default mongoose.model<IQueueLogModel>('queue_logs', QueueLogSchema.schema);

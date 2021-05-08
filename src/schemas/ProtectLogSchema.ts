import mongoose, {Schema} from 'mongoose';
import IProtectLogModel from '../models/protectLogs/IProtectLogModel';

class ProtectLogSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        // 0: thủ công - 1: tự động
        type: {type: Schema.Types.Number},
        // mức chênh lệch nữa buy/sell
        diff: {type: Schema.Types.Number},
        // mức can thiệp bảo vệ sàn: 0: thủ công - 1: tự động mức 1 - 2: tự động mức 2 - 3: Tự động mức 3 - 4: Tự động mức 4
        level:{type: Schema.Types.Number}
      },
      {
        timestamps: true,
      },
    );

    /** return */
    return schema;
  }
}

export default mongoose.model<IProtectLogModel>('protect_logs', ProtectLogSchema.schema);

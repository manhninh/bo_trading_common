import mongoose, { Schema } from 'mongoose';
import ISystemConfigModel from '../models/systemConfig/ISystemConfigModel';

class SystemConfigSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        key: { type: Schema.Types.String, required: true, default: '' },
        value: { type: Schema.Types.String, required: true, default: '' },
        active: { type: Schema.Types.Boolean, required: true, default: 1 }
      },
      {
        timestamps: true,
      },
    );
    return schema;
  }
}

export default mongoose.model<ISystemConfigModel>('system_config', SystemConfigSchema.schema);

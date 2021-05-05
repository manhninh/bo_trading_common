import mongoose, {Schema} from 'mongoose';
import IAdminModel from '../models/admins/IAdminModel';

class AdminSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        email: {type: Schema.Types.String, index: true, required: true, unique: true},
        salt: {type: Schema.Types.String, required: true},
        hashed_password: {type: Schema.Types.String, required: true},
        tfa: {type: Schema.Types.String},
        code: {type: Schema.Types.String},
      },
      {
        timestamps: true,
      },
    );

    /** return */
    return schema;
  }
}

export default mongoose.model<IAdminModel>('protect_logs', AdminSchema.schema);

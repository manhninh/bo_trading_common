import mongoose, { Schema } from 'mongoose';
import IRefreshTokenModel from '../models/refreshTokens/IRefreshTokenModel';

class RefreshTokenSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      user_id: { type: Schema.Types.ObjectId, required: true, },
      client_id: { type: Schema.Types.String, required: true, },
      token: { type: String, required: true, }
    }, {
      timestamps: true
    });
    return schema;
  }
}

export default mongoose.model<IRefreshTokenModel>('refresh_tokens', RefreshTokenSchema.schema);

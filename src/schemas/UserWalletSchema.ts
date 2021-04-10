import mongoose, { Schema } from 'mongoose';
import IUserWalletModel from '../models/userWallets/IUserWalletModel';

class UserWalletSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        user_id: { type: Schema.Types.ObjectId, required: true },
        amount_trade: { type: Schema.Types.Number, required: true, default: 0 },
        amount_demo: { type: Schema.Types.Number, required: true, default: 10000 },
        amount_expert: { type: Schema.Types.Number, default: 0 },
        amount_copytrade: { type: Schema.Types.Number, default: 0 },
        trc20: { type: Schema.Types.Mixed, default: null },
        erc20: { type: Schema.Types.Mixed, default: null }
      },
      {
        timestamps: true,
      },
    );
    return schema;
  }
}

export default mongoose.model<IUserWalletModel>('user_wallets', UserWalletSchema.schema);

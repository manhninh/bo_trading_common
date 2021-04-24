import mongoose, { Schema } from 'mongoose';
import IUserWalletModel from '../models/userWallets/IUserWalletModel';

class UserWalletSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        user_id: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
        amount: { type: Schema.Types.Number, required: true, default: 0 },
        amount_trade: { type: Schema.Types.Number, required: true, default: 0 },
        amount_demo: { type: Schema.Types.Number, required: true, default: 10000 },
        amount_expert: { type: Schema.Types.Number },
        amount_copytrade: { type: Schema.Types.Number },
        trc20: { type: Schema.Types.String, default: null },
        erc20: { type: Schema.Types.String, default: null },
        enable_withdraw: { type: Schema.Types.Boolean, default: true },
      },
      {
        timestamps: true,
      },
    );
    return schema;
  }
}

export default mongoose.model<IUserWalletModel>('user_wallets', UserWalletSchema.schema);

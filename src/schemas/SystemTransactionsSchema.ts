import mongoose, { Schema } from 'mongoose';
import ISystemTransactionsModel from '../models/systemTransactions/ISystemTransactionsModel';
import Constants from '../utils/Constants';

class SystemTransactionsSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        user_id: { type: Schema.Types.ObjectId, required: true },
        amount: { type: Schema.Types.Number, required: true, default: Constants.AMOUNT_DEFAULT },
        symbol: { type: Schema.Types.String, required: true, default: Constants.SYMBOL_USDT_TRC20 },
        address: { type: Schema.Types.String, default: '' },
        tx: { type: Schema.Types.String, default: '' },
        status: { type: Schema.Types.Number, default: Constants.TRANSACTION_STATUS_PENDING }, // 0: Pending, 1: Active, 2: Cancelled, 
        response: { type: Schema.Types.Mixed },
        noted: { type: Schema.Types.String, default: '' } // Noted if Withdraw reject by TRON
      },
      {
        timestamps: true,
      },
    );
    return schema;
  }
}

export default mongoose.model<ISystemTransactionsModel>('system_transactions', SystemTransactionsSchema.schema);

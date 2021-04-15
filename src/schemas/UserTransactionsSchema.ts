import mongoose, { Schema } from 'mongoose';
import IUserTransactionsModel from '../models/userTransactions/IUserTransactionsModel';
import Constants from '../utils/Constants';
const mongoosePaginate = require('mongoose-paginate-v2');

class UserTransactionsSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        user_id: { type: Schema.Types.ObjectId, required: true },
        to_user_id: { type: Schema.Types.ObjectId }, // Setup if transaction if transfer from A to B
        amount: { type: Schema.Types.Number, required: true, default: Constants.AMOUNT_DEFAULT },
        fee: { type: Schema.Types.Number, required: false, default: Constants.AMOUNT_DEFAULT },
        symbol: { type: Schema.Types.String, required: true, default: Constants.SYMBOL_USDT_TRC20 },
        address: { type: Schema.Types.String, default: '' },
        tx: { type: Schema.Types.String, default: '' },
        status: { type: Schema.Types.Number, default: Constants.TRANSACTION_STATUS_PENDING }, // 0: Pending, 1: Active, 2: Cancelled, 
        type: { type: Schema.Types.Number, default: Constants.TRANSACTION_TYPE_DEPOSIT }, // 0: Deposit, 1: Transfer, 2: Withdraw
        noted: { type: Schema.Types.String, default: '' } // Noted if Withdraw reject by Admin, insufficient tokens
      },
      {
        timestamps: true,
      },
    );

    //
    schema.plugin(mongoosePaginate);
    return schema;
  }
}

export default mongoose.model<IUserTransactionsModel>('user_transactions', UserTransactionsSchema.schema);

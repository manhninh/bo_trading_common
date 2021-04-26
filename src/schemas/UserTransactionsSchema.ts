import mongoose, { Schema } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate';
import Constants from '../utils/Constants';

class UserTransactionsSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        user_id: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
        to_user_id: { type: Schema.Types.ObjectId, ref: 'users' }, // Setup if transaction if transfer from A to B
        amount: { type: Schema.Types.Number, required: true, default: Constants.AMOUNT_DEFAULT },
        fee: { type: Schema.Types.Number, required: false, default: Constants.AMOUNT_DEFAULT },
        symbol: { type: Schema.Types.String, default: Constants.SYMBOL_USDT_TRC20 },
        address: { type: Schema.Types.String, default: '' },
        tx: { type: Schema.Types.String, default: '' },
        status: { type: Schema.Types.Number, default: Constants.TRANSACTION_STATUS_PENDING }, // 0: Pending, 1: Active, 2: Cancelled,
        type: { type: Schema.Types.Number, default: Constants.TRANSACTION_TYPE_DEPOSIT }, // 0: Deposit, 1: Transfer, 2: Withdraw, 3: Buy Sponsor
        noted: { type: Schema.Types.String, default: '' }, // Noted if Withdraw reject by Admin, insufficient tokens
      },
      {
        timestamps: true,
      },
    );

    //
    schema.plugin(aggregatePaginate);
    return schema;
  }
}

export default mongoose.model('user_transactions', UserTransactionsSchema.schema);

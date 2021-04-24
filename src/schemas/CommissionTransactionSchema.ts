import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import ICommissionTransactionModel from '../models/commissionTransactions/ICommissionTransactionModel';

class CommissionTransactionSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        // 0: trade - 1: copy trade
        type_commission: {type: Schema.Types.Number, required: true},
        id_user: {type: Schema.Types.ObjectId, required: true},
        amount: {type: Schema.Types.Number, required: true},
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

export default mongoose.model<ICommissionTransactionModel>('commission_transactions', CommissionTransactionSchema.schema);

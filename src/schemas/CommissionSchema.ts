import mongoose, {Schema} from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import ICommissionModel from '../models/commissions/ICommissionModel';

class CommissionSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        // 0: trade - 1: copy trade
        type_commission: {type: Schema.Types.Number, required: true},
        id_user: {type: Schema.Types.ObjectId, required: true},
        id_user_ref: {type: Schema.Types.ObjectId, required: true},
        id_history: {type: Schema.Types.ObjectId, required: true},
        level: {type: Schema.Types.Number, required: true},
        investment_amount: {type: Schema.Types.Number, required: true},
        commission: {type: Schema.Types.Number, required: true},
        is_withdraw: {type: Schema.Types.Boolean, required: true},
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

export default mongoose.model<ICommissionModel>('commissions', CommissionSchema.schema);

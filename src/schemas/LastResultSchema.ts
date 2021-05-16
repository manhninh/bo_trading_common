import mongoose, { Schema } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate';
import mongoosePaginate from 'mongoose-paginate';
import ILastResultModel from '../models/lastResults/ILastResultModel';

class LastResultSchema {
  static get schema() {
    const schema = new mongoose.Schema({
      group: { type: Schema.Types.Number, required: true },
      el_number: { type: Schema.Types.Number, required: true },
      result: { type: Schema.Types.Boolean, required: true },
    });

    schema.plugin(aggregatePaginate);
    schema.plugin(mongoosePaginate);
    return schema;
  }
}

export default mongoose.model<ILastResultModel>('last_results', LastResultSchema.schema);

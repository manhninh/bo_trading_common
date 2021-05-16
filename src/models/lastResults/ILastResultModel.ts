import {Document} from 'mongoose';

export default interface ILastResultModel extends Document {
  group: number;
  el_number: number;
  result: boolean;
}

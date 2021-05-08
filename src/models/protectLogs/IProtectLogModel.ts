import mongoose from 'mongoose';

export default interface IProtectLogModel extends mongoose.Document {
  type: number;
  diff: number;
  level: number;
}

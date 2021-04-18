import mongoose from 'mongoose';

export default interface IOrderLogModel extends mongoose.Document {
  logs: string;
}

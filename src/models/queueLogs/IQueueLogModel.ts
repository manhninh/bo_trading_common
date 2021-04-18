import mongoose from 'mongoose';

export default interface IQueueLogModel extends mongoose.Document {
  logs: string;
}

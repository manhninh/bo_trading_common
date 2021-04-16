import mongoose from 'mongoose';

export default interface ISystemConfigModel extends mongoose.Document {
  key: string;
  value: string;
  active: boolean;
}

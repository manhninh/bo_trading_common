import mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document {
  email: string;
  salt: string;
  hashed_password: string;
  tfa?: string;
  /** private variable */
  _plain_password: string;
  /** virtual */
  password: string;
  /** methods */
  encryptPassword: (password: string) => string;
  checkPassword: (password: string) => boolean;
}

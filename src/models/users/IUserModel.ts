import mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document {
  full_name?: string;
  username: string;
  email: string;
  salt: string;
  hashed_password: string;
  phone?: string;
  type_user: number;
  user_parent_id?: string;
  tfa_salt?: string;
  tfa_hashed?: string;
  commission_level?: string[];
  ref_code?: string;
  verify_code?: string;
  status: number;
  /** private variable */
  _plain_password: string;
  _plain_tfa: string;
  /** virtual */
  password: string;
  tfa: string;
  /** methods */
  encryptPassword: (password: string) => string;
  checkPassword: (password: string) => boolean;
  encryptTFA: (tfa: string) => string;
  checkTFA: (tfa: string) => boolean;
}

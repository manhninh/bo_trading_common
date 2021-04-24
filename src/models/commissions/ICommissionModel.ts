import mongoose from 'mongoose';

export default interface ICommissionModel extends mongoose.Document {
  type_commission: number;
  id_user: string;
  id_user_ref: string;
  id_history: string;
  level: number;
  investment_amount: number;
  commission: number;
  is_withdraw: boolean;
}

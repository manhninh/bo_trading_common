import mongoose from 'mongoose';

export default interface ICommissionTransactionModel extends mongoose.Document {
  type_commission: number;
  id_user: string;
  amount: number;
}

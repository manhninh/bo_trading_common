import mongoose from 'mongoose';

export default interface ISystemTransactionsModel extends mongoose.Document {
  amount: number;
  symbol: string;
  address: string;
  tx: string;
  status: number; // 0: Pending, 1: Active, 2: Cancelled, 
  noted: string;
}

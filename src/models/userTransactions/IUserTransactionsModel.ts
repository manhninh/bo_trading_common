import mongoose from 'mongoose';

export default interface IUserTransactionsModel extends mongoose.Document {
  user_id: string;
  to_user_id: string; // Setup if transaction if transfer from A to B
  amount: number;
  fee: number;
  symbol: string;
  address: string;
  tx: string;
  status: number; // 0: Pending, 1: Active, 2: Cancelled, 
  type: number; // 0: Deposit, 1: Transfer, 2: Withdraw
  noted: string;
}

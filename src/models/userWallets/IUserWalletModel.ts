import mongoose from 'mongoose';

export default interface IUserWalletModel extends mongoose.Document {
  user_id: string;
  amount_trade: number;
  amount_demo: number;
  amount_expert?: number;
  amount_copytrade?: number;
  trc20?: object;
  erc20?: object;
}

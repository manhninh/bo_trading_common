import mongoose from 'mongoose';

export default interface IUserWalletModel extends mongoose.Document {
  user_id: string;
  amount: number;
  amount_trade: number;
  amount_demo: number;
  amount_expert?: number;
  amount_copytrade?: number;
  trc20?: string;
  erc20?: string;
  enable_withdraw?: boolean;
  amount_wallet?: number;
}

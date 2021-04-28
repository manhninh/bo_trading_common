import mongoose from 'mongoose';

export default interface IOrderModel extends mongoose.Document {
  // uuid lệnh đánh, nếu là copy trade thì bản ghi chuyên gia và người copy giống nhau order_uuid
  order_uuid: string;
  // user id ref from table users
  user_id: string;
  // trạng thái lệnh là buy hay sell - 0: buy - 1: sell
  status_order: boolean;
  // số tiền vào lệnh
  amount_order: number;
  // 0: Real - 1: Demo - 2: Expert - 3: User Copy
  type_user?: number;
  // số tiền của tài khoản trước khi vào lệnh, phục vụ tìm lại lịch sử nếu lỗi
  prev_total_amount?: number;
  /** trạng thái lệnh đang chờ kết quả hay đã hoàn thành - 0: inprocess - 1: done */
  status: boolean;
}

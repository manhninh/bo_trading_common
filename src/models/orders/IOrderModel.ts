import mongoose from 'mongoose';

export default interface IOrderModel extends mongoose.Document {
  // uuid lệnh đánh, nếu là copy trade thì bản ghi chuyên gia và người copy giống nhau order_uuid
  order_uuid: string,
  // user id ref from table users
  user_id: string,
  // giá mở cửa của nến vào lệnh
  open_order: number,
  // giá đóng cửa của nến vào lệnh
  close_order: number,
  // trạng thái lệnh là buy hay sell - 0: buy - 1: sell
  status_order: boolean,
  // số tiền vào lệnh
  amount_order: number,
  /** có phải lệnh của chuyên gia đi lệnh từ hệ thống copy trade */
  is_expert: boolean,
  /** trạng thái lệnh đang chờ kết quả hay đã hoàn thành - 0: inprocess - 1: done */
  status: boolean,
}

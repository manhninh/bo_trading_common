import IQueueLogModelModel from './IQueueLogModel';

export default class QueueLogModelModel {
  private _QueueLogModelModel: IQueueLogModelModel;

  constructor(QueueLogModelModel: IQueueLogModelModel) {
    this._QueueLogModelModel = QueueLogModelModel;
  }

  get logs(): string {
    return this._QueueLogModelModel.logs;
  }
}

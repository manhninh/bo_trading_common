import IProtectLogModel from './IProtectLogModel';

export default class ProtectLogModel {
  private _protectLogModel: IProtectLogModel;

  constructor(ProtectLogModel: IProtectLogModel) {
    this._protectLogModel = ProtectLogModel;
  }

  get type(): number {
    return this._protectLogModel.type;
  }

  get diff(): number {
    return this._protectLogModel.diff;
  }

  get level(): number {
    return this._protectLogModel.level;
  }
}

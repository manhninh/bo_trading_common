import ILastResultModel from './ILastResultModel';

export default class LastResultModel {
  private _lastResultModel: ILastResultModel;

  constructor(obj: ILastResultModel) {
    this._lastResultModel = obj;
  }
  get group(): number {
    return this._lastResultModel.group;
  }

  get el_number(): number {
    return this._lastResultModel.el_number;
  }

  get result(): boolean {
    return this._lastResultModel.result;
  }
}

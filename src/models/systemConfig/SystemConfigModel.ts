import ISystemConfigModel from './ISystemConfigModel';

export default class SystemConfigModel {
  private _systemConfigModel: ISystemConfigModel;

  constructor(SystemConfigModel: ISystemConfigModel) {
    this._systemConfigModel = SystemConfigModel;
  }

  get key(): string {
    return this._systemConfigModel.key;
  }

  get value(): string {
    return this._systemConfigModel.value;
  }

  get active(): boolean {
    return this._systemConfigModel.active;
  }
}

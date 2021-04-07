import IRefeshTokenModel from './IRefeshTokenModel';
export default class RefeshTokenModel {
    private _refeshTokenModel;
    constructor(RefeshTokenModel: IRefeshTokenModel);
    get user_id(): string;
    get client_id(): string;
    get token(): string;
    get createdAt(): string;
}

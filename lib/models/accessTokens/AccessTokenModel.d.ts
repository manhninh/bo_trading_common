import IAccessTokenModel from './IAccessTokenModel';
export default class AccessTokenModel {
    private _AccessTokenModel;
    constructor(AccessTokenModel: IAccessTokenModel);
    get user_id(): string;
    get client_id(): string;
    get token(): string;
    get createdAt(): string;
}

import IClientModel from './IClientModel';
export default class ClientModel {
    private _clientModel;
    constructor(ClientModel: IClientModel);
    get client_id(): string;
    get client_secret(): string;
    get name(): string;
}

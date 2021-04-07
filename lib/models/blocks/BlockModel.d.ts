import IBlockModel from './IBlockModel';
export default class BlockModel {
    private _blockModel;
    constructor(obj: IBlockModel);
    get symbol(): string;
    get event_time(): string;
    get open(): number;
    get close(): number;
    get high(): number;
    get low(): number;
    get volume(): number;
    get is_open(): boolean;
}

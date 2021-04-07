import IUserModel from './IUserModel';
export default class UserModel {
    private _userModel;
    constructor(UserModel: IUserModel);
    get full_name(): string;
    get username(): string;
    get email(): string;
    get salt(): string;
    get hashed_password(): string;
    get phone(): string;
    get type_user(): number;
    get user_parent_id(): string;
    get tfa(): string;
    get commission_level(): string[];
    get ref_code(): string;
    get amount(): number;
    get verify_code(): string;
    get status(): number;
}

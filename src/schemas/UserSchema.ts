import {pbkdf2Sync, randomBytes} from 'crypto';
import mongoose, {Schema} from 'mongoose';
import IUserModel from '../models/users/IUserModel';

class UserSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        username: {type: Schema.Types.String, required: true, unique: true},
        email: {type: Schema.Types.String, index: true, required: true, unique: true},
        salt: {type: Schema.Types.String, required: true},
        hashed_password: {type: Schema.Types.String, required: true},
        full_name: {type: Schema.Types.String},
        phone: {type: Schema.Types.String},
        // 0: Real - 1: Demo - 2: Expert - 3: User Copy
        type_user: {type: Schema.Types.Number, required: true, default: 0},
        user_parent_id: {type: Schema.Types.ObjectId},
        // 2fa
        tfa_salt: {type: Schema.Types.String},
        tfa_hashed: {type: Schema.Types.String},
        commission_level: {type: Schema.Types.Array},
        ref_code: {type: Schema.Types.String},
        verify_code: {type: Schema.Types.String},
        // 0: Not Active - 1: Active - 2: Block
        status: {type: Schema.Types.Number, required: true, default: 0},
      },
      {
        timestamps: true,
      },
    );

    /** virtual */
    schema
      .virtual('password')
      .set(function (this: IUserModel, password: string) {
        this._plain_password = password;
        const salt = randomBytes(128).toString('hex');
        this.salt = salt;
        const hashedPassword = this.encryptPassword(password);
        this.hashed_password = hashedPassword;
      })
      .get(function (this: IUserModel) {
        return this._plain_password;
      });

    schema
      .virtual('tfa')
      .set(function (this: IUserModel, tfa: string) {
        this._plain_tfa = tfa;
        const salt = randomBytes(128).toString('hex');
        this.tfa_salt = salt;
        const hashed = this.encryptTFA(tfa);
        this.tfa_hashed = hashed;
      })
      .get(function (this: IUserModel) {
        return this._plain_password;
      });

    /** method */
    // encrypt password
    schema.methods.encryptPassword = function (this: IUserModel, password: string) {
      return pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };
    schema.methods.checkPassword = function (this: IUserModel, password: string) {
      return this.encryptPassword(password) === this.hashed_password;
    };

    // encrypt tfa
    schema.methods.encryptTFA = function (this: IUserModel, tfa: string) {
      return pbkdf2Sync(tfa, this.salt, 10000, 512, 'sha512').toString('hex');
    };
    schema.methods.checkTFA = function (this: IUserModel, tfa: string) {
      return this.encryptTFA(tfa) === this.tfa_hashed;
    };

    /** return */
    return schema;
  }
}

export default mongoose.model<IUserModel>('users', UserSchema.schema);

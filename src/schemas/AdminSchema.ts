import {pbkdf2Sync, randomBytes} from 'crypto';
import mongoose, {Schema} from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate';
import IAdminModel from '../models/admins/IAdminModel';

class AdminSchema {
  static get schema() {
    const schema = new mongoose.Schema(
      {
        email: {type: Schema.Types.String, index: true, required: true, unique: true},
        salt: {type: Schema.Types.String, required: true},
        hashed_password: {type: Schema.Types.String, required: true},
        tfa: {type: Schema.Types.String},
      },
      {
        timestamps: true,
      },
    );

    /** virtual */
    schema
      .virtual('password')
      .set(function (this: IAdminModel, password: string) {
        this._plain_password = password;
        const salt = randomBytes(128).toString('hex');
        this.salt = salt;
        const hashedPassword = this.encryptPassword(password);
        this.hashed_password = hashedPassword;
      })
      .get(function (this: IAdminModel) {
        return this._plain_password;
      });

    /** method */
    // encrypt password
    schema.methods.encryptPassword = function (this: IAdminModel, password: string) {
      return pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };
    schema.methods.checkPassword = function (this: IAdminModel, password: string) {
      return this.encryptPassword(password) === this.hashed_password;
    };

    /** return */
    return schema;
  }
}

export default mongoose.model<IAdminModel>('admins', AdminSchema.schema);

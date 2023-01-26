import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }}
);

export const LoginModel: Model<IUser> = model<IUser>('users1', UserSchema);
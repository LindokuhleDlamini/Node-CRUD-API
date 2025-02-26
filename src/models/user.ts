import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
  _id: string;
  email: string;
  name: string;
  password: string;
}

const userSchema = new Schema<UserDocument>({
  _id: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<UserDocument>('User', userSchema);
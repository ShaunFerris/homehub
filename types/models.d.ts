import { Schema, Document, Model } from "mongoose";

export interface IUserGroup {
  name: string;
  userList: Array<string>;
}

export interface IUserGroupDocument extends IUserGroup, Document {}

export interface IUserGroupModel extends Model<IUserGroupDocument> {
  buildUserGroup(args: IUserGroup): IUserGroupDocument;
}

export interface IUser extends Document {
  email: string;
  username: string;
  image: string;
  userGroup: IUserGroup;
}

export interface IUserModel extends Model<IUserDocument> {
  buildUser(args: IUser): IUserDocument;
}

export interface ITodo {
  creator: Schema.Types.ObjectId;
  name: string;
  complete: boolean;
}

export interface ITodoContext {
  todoTasks: ITodo[];
  stateChange: boolean;
  setStateChange: (state: boolean) => void;
}

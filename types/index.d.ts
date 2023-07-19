import { Document, Model } from "mongoose";

export interface IUserGroup {
  name: string;
  userList: Array<string>;
}

export interface IUserGroupDocument extends IUserGroup, Document {}

export interface IUserGroupModel extends Model<IUserGroupDocument> {
  buildUserGroup(args: IUserGroup): IUserGroupDocument;
}

export interface IUser {
  email: string;
  username: string;
  image: string;
  userGroup: IUserGroup;
}

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> {
  buildUser(args: IUser): IUserDocument;
}

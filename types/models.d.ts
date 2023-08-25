import { Schema, Document, Model } from "mongoose";

/**
 * Interfaces for the User model and currently unreleased
 * userGroups functionality
 */
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

/**
 * Interfaces for the todo list data and db models
 */
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

/**
 * Interfaces for the budget data and db models
 */
export interface IBudget {
  name: string;
  budget: number;
  expenses: Array;
}

export interface IBudgetContext {
  budgetData: IBudget;
  dispatch: (action) => void;
}

export interface IBudgetDocument extends IBudget, Document {}

/**
 * Interfaces for the shoplist data and db models
 */
export interface IShopListItem {
  name: string;
  complete: boolean;
}

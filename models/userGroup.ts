import { Schema, Document, Model, model, models } from "mongoose";

interface IUserGroup {
  name: string;
  userList: Array<string>;
}

interface IUserGroupDocument extends IUserGroup, Document {}

interface IUserGroupModel extends Model<IUserGroupDocument> {
  buildUser(args: IUserGroup): IUserGroupDocument;
}

const UserGroupSchema: Schema<IUserGroup> = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  userList: {
    type: [String],
    default: [],
    required: true
  }
});

UserGroupSchema.statics.buildUser = (args: IUserGroup) => {
  return new Usergroup(args);
};

const Usergroup =
  models.UserGroup ||
  model<IUserGroupDocument, IUserGroupModel>(
    "UserGroup",
    UserGroupSchema
  );

export default Usergroup;

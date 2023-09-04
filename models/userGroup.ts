import { Schema, model, models } from "mongoose";
import {
  IUserGroup,
  IUserGroupDocument,
  IUserGroupModel
} from "@/types/models";

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

const UserGroup =
  models.UserGroup ||
  model<IUserGroupDocument, IUserGroupModel>("UserGroup", UserGroupSchema);

export default UserGroup;

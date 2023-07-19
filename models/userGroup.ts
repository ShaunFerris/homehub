import { Schema, model, models } from "mongoose";

const UserGroupSchema = new Schema({
  name: {
    type: String,
    unique: [true, "Group name already in use"],
    required: [true, "A group name is required"]
  },
  userList: {
    type: [String],
    default: [],
    required: true
  }
});

const Usergroup =
  models.UserGroup || model("UserGroup", UserGroupSchema);

export default Usergroup;

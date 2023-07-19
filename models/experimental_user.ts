import { Schema, model, models } from "mongoose";
import { IUser, IUserDocument, IUserModel } from "@/types";

const ExpUserSchema: Schema<IUser> = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
    ]
  },
  image: { type: String },
  userGroup: {
    type: Schema.Types.ObjectId
  }
});

const ExpUser =
  models.User ||
  model<IUserDocument, IUserModel>("User", ExpUserSchema);

export default ExpUser;

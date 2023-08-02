import { Schema, model, models } from "mongoose";
import { IUser } from "@/types/models";

const UserSchema = new Schema<IUser>({
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

const User = models.User || model<IUser>("User", UserSchema);

export default User;

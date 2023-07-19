import { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  }
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;

import { Schema, model, models } from "mongoose";
import { ITodo, ITodoModel } from "@/types/models";

const TodoSchema = new Schema<ITodo>({
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

const Todo: ITodoModel =
  models.Todo || model<ITodo, ITodoModel>("Todo", TodoSchema);

export default Todo;

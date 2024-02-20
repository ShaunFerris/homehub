import { Schema, Document, Model, model, models } from "mongoose";

export interface ITodo extends Document {
  creator: Schema.Types.ObjectId;
  name: string;
  complete: boolean;
}

export interface ITodoModel extends Model<ITodo> {}

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

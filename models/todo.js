import { Schema, model, models } from 'mongoose';

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    complete: Boolean
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
import { Schema, model, models } from 'mongoose';

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: Boolean
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
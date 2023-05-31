import { Schema, model, models } from 'mongoose';

const ExpenseSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
});

const BudgetSchema = new Schema({
    budget: {
        type: Number
    },
    expenses: [
        ExpenseSchema
    ]
});

const Budget = models.Budget || model("Budget", BudgetSchema);

export default Budget;
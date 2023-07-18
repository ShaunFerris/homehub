import { Schema, model, models } from "mongoose";

const ExpenseSchema = new Schema({
  expenseid: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
  },
  expenses: {
    type: [ExpenseSchema],
    default: [],
    validate: {
      validator: function (expenses) {
        // Allow empty array or array with expense objects
        return (
          Array.isArray(expenses) &&
          expenses.every((expense) => expense.name && expense.cost)
        );
      },
      message: "Expenses array must contain valid expense object",
    },
  },
});

const Budget = models.Budget || model("Budget", BudgetSchema);

export default Budget;

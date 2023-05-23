import { createContext, useReducer } from "react";

const BudgetReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => {
                    return expense.id !== action.payload;
                })
            };
        case "EDIT_BUDGET":
            return {
                ...state,
                budget: action.payload
            };
        default:
            return state;
    }
};
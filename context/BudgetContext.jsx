"use client";

import { createContext, useReducer, useEffect } from "react";
import { useParams } from "next/navigation";

const BudgetReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => {
          return expense.id !== action.payload;
        }),
      };
    case "EDIT_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  name: "",
  budget: 0,
  expenses: [],
};

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const params = useParams();

  const [state, dispatch] = useReducer(BudgetReducer, initialState);

  useEffect(() => {
    const getCurrentBudget = async () => {
      try {
        const response = await fetch(
          `/api/budget/${params.id.toString()}`,
        );
        const budget = await response.json();
        dispatch({ type: "SET_DATA", payload: budget });
      } catch (error) {
        console.log("Failed to fetch budget data: ", error);
      }
    };
    getCurrentBudget();
  }, [params.id]);

  return (
    <BudgetContext.Provider
      value={{
        budgetData: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

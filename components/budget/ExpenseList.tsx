"use client";

import { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "@/context/BudgetContext";

const ExpenseList = () => {
  const { budgetData } = useContext(BudgetContext);

  const expenses = budgetData.expenses;

  const [filteredExpenses, setFileteredExpenses] = useState(
    expenses || []
  );

  useEffect(() => {
    return setFileteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((expense) => {
      return expense.name.toLowerCase().includes(event.target.value);
    });
    setFileteredExpenses(searchResults);
  };

  return (
    <div
      data-test="budget-expenseListWrapper"
      className="card_container_vert w-full mb-4"
    >
      <h1 className="subhead_text text-center">Expenses</h1>
      {filteredExpenses.length === 0 ? (
        <p
          data-test="budget-noExpensesMsg"
          className="desc_2 text-center"
        >
          No expenses have been added yet
        </p>
      ) : (
        <>
          <input
            className="mb-2 mr-2 border border-black p-2 rounded"
            type="text"
            onChange={handleChange}
            placeholder={"Type to search..."}
          />
          <ul
            className="w-full text-lg font-medium text-gray-900
            border border-black rounded-lg"
          >
            {filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ExpenseList;

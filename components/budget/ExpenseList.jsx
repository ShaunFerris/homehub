import { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "@/context/budgetContext";

const ExpenseList = () => {
    const { expenses } = useContext(BudgetContext);

    const [filteredExpenses, setFileteredExpenses] = useState(
        expenses || []);

    useEffect(() => {
        return setFileteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const searchResults = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(
                event.target.value);
        });
        setFileteredExpenses(searchResults);
    };

    return (
        <>
            <input
                className="mb-2 mr-2"
                type="text"
                onChange={handleChange}
                placeholder={"Type to search..."}
            />
            <ul className="w-full text-lg font-medium text-gray-900 
                bg-gray-200 border border-black rounded-lg">
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
    );
};

export default ExpenseList;
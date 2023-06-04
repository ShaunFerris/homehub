import { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetContext } from "@/context/BudgetContext";

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
        <div className="card_container_long">
            {filteredExpenses.length === 0 ? (
                <div>
                    No expenses have been added yet
                </div>) : (
                <>
                    <input
                        className="mb-2 mr-2 border border-black p-2 rounded"
                        type="text"
                        onChange={handleChange}
                        placeholder={"Type to search..."}
                    />
                    <ul className="w-full text-lg font-medium text-gray-900
            border border-black rounded-lg">
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
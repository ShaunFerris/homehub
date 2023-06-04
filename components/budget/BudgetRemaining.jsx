import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext";

const BudgetRemaining = () => {
    const { budget, expenses } = useContext(BudgetContext);

    const totalExpenses = expenses.reduce((total, expense) => {
        return (total + expense.cost);
    }, 0);

    const alertColor = totalExpenses > budget ?
        "bg-red-500" :
        "bg-blue-500";

    return (
        <div className={`flex justify-between p-3.5 items-center
            ${alertColor} rounded-md`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    );
};

export default BudgetRemaining;
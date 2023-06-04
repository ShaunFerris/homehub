import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext";

const BudgetExpTotal = () => {
    const { expenses } = useContext(BudgetContext);

    const totalSpent = expenses.reduce((total, expense) => {
        return (total + expense.cost);
    }, 0);

    return (
        <div className="flex justify-between p-3.5 items-center
            bg-amber-600 rounded-md">
            <span>Spent so far: ${totalSpent}</span>
        </div>
    );
};

export default BudgetExpTotal;
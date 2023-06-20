import BudgetValuesDisplay from "@/components/budget/BudgetValuesDisplay";
import AddExpenseForm from "@/components/budget/AddExpenseForm";
import ExpenseList from "@/components/budget/ExpenseList";
import { BudgetProvider } from "@/context/BudgetContext";

const Budget = ({ params }) => {
    return (
        <BudgetProvider>
            <section className="flex flex-col items-center w-full
                justify-between">
                <h1 className="head_text text-center mb-5 blue_gradient
                py-2">
                    Budget Tracking
                </h1>
                <BudgetValuesDisplay />
                <ExpenseList />
                <AddExpenseForm />
            </section>
        </BudgetProvider>
    );
};

export default Budget;

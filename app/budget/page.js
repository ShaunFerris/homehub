"use client";

import BudgetAmount from "@/components/budget/BudgetAmount";
import BudgetExpTotal from "@/components/budget/BudgetExpTotal";
import BudgetRemaining from "@/components/budget/BudgetRemaining";
import AddExpenseForm from "@/components/budget/AddExpenseForm";
import ExpenseList from "@/components/budget/ExpenseList";
import { BudgetProvider } from "@/context/budgetContext";

const Budget = () => {
    return (
        <BudgetProvider>
            <section className='flex flex-center flex-col w-full 
                items-center justify-center'>
                <h1>Budget Tracking</h1>
                <div>
                    <div>
                        <BudgetAmount />
                    </div>
                    <div>
                        <BudgetRemaining />
                    </div>
                    <div>
                        <BudgetExpTotal />
                    </div>
                </div>
                <h1>Expenses</h1>
                <div>
                    <div>
                        <ExpenseList />
                    </div>
                </div>
                <h1>Add Expense</h1>
                <div>
                    <div>
                        <AddExpenseForm />
                    </div>
                </div>
            </section>
        </BudgetProvider>
    );
};

export default Budget;
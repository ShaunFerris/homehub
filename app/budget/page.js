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
            <section className="flex flex-col items-center w-full
                justify-between">
                <h1 className="head_text text-center mb-5">
                    Budget Tracking
                </h1>
                <div className="w-full flex flex-wrap justify-between
                card_container_long">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">
                        <BudgetAmount />
                    </div>
                    <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">
                        <BudgetRemaining />
                    </div>
                    <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">
                        <BudgetExpTotal />
                    </div>
                </div>
                <h1 className="subhead_text text-center">
                    Expenses
                </h1>
                <ExpenseList />
                <h1 className="subhead_text text-center mb-5">
                    Add Expense
                </h1>
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

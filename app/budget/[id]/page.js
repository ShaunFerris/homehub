"use client";

import BudgetValuesDisplay from "@/components/budget/BudgetValuesDisplay";
import Loader from "@/components/Loader";
import AddExpenseForm from "@/components/budget/AddExpenseForm";
import ExpenseList from "@/components/budget/ExpenseList";
import { BudgetProvider } from "@/context/BudgetContext";
import { useEffect, useState } from "react";

const Budget = ({ params }) => {
    const [budgetData, setBudgetData] = useState({
        name: "", budgetAmount: 0, expenseList: []
    });

    useEffect(() => {
        const getCurrentBudget = async () => {
            try {
                const response = await fetch(
                    `/api/budget/${params.id.toString()}`);
                const budget = await response.json();
                setBudgetData(budget);
            } catch (error) {
                console.log(
                    "Failed to fetch budget data: ", error
                );
            }
        };
        getCurrentBudget();
    }, [params]);

    return (
        <BudgetProvider>
            <section className="flex flex-col items-center w-full
                justify-between">
                <h1 className="head_text text-center mb-5 blue_gradient
                py-2">
                    Budget Tracking
                </h1>
                <h1 className="subhead_text text-center">
                    Budget: {
                        budgetData === null ? "" :
                            budgetData.name}
                </h1>
                {budgetData.name === "" ?
                    <Loader /> :
                    <BudgetValuesDisplay budgetData={budgetData} />}
                <ExpenseList />
                <AddExpenseForm budgetData={budgetData} />
            </section>
        </BudgetProvider>
    );
};

export default Budget;

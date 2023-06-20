"use-client";

import { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const BudgetValuesDisplay = ({ budgetData }) => {
    const [editMode, toggleEditMode] = useState(false);

    const totalSpent = budgetData.expenses === [] ?
        0 : budgetData.expenses.reduce((total, expense) => {
            return (total + expense.cost);
        }, 0);

    const alertColor = totalSpent > budgetData.budget ?
        "bg-red-500" :
        "bg-blue-500";

    const handleEdit = () => {
        toggleEditMode(true);
    };

    const handleSaveEdit = (value) => {
        budgetData.budget = value;
        toggleEditMode(false);
    };

    return (
        <div className="w-full flex flex-wrap justify-between
        card_container_long">
            <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4
            lg:flex-1 md:flex-1">
                <div className="flex justify-between p-2.5 items-center
                bg-blue-300 rounded-md">
                    {editMode ?
                        <EditBudget
                            budget={budgetData.budget}
                            handleSaveEdit={handleSaveEdit}
                        /> :
                        <ViewBudget
                            budget={budgetData.budget}
                            handleEdit={handleEdit}
                        />
                    }
                </div>
            </div>
            <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4
            lg:flex-1 md:flex-1">
                <div className={`flex justify-between p-3.5 items-center
                ${alertColor} rounded-md`}>
                    <span>
                        Remaining: ${budgetData.budget - totalSpent}
                    </span>
                </div>
            </div>
            <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4
            lg:flex-1 md:flex-1">
                <div className="flex justify-between p-3.5 items-center
                bg-amber-600 rounded-md">
                    <span>Spent so far: ${totalSpent}</span>
                </div>
            </div>
        </div>
    );
};

export default BudgetValuesDisplay;
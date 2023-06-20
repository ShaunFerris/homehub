"use-client";

import { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const BudgetValuesDisplay = ({ budgetData }) => {
    const [editMode, toggleEditMode] = useState(false);

    const handleEdit = () => {
        toggleEditMode(true);
    };

    const handleSaveEdit = (value) => {
        dispatch({
            type: "EDIT_BUDGET",
            payload: value
        });
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
            <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">

            </div>
            <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">

            </div>
        </div>
    );
};

export default BudgetValuesDisplay;
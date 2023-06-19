"use-client";

import { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const BudgetValuesDisplay = ({ budgetData }) => {

    return (
        <div className="w-full flex flex-wrap justify-between
                card_container_long">
            <div className="w-full sm:w-auto mb-4 sm:mb-0
                        sm:mr-4 lg:flex-1 md:flex-1">

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
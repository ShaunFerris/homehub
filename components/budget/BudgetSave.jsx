"use client";

import { BudgetContext } from "@/context/BudgetContext";
import { useContext } from "react";

const BudgetSave = ({ params }) => {
    const { budgetData } = useContext(BudgetContext);

    const saveAndUpdate = async () => {
        try {
            const response = await fetch(`api/budget/${params.id}`, {
                method: "PATCH",
                body: JSON.stringify({ ...budgetData })
            });
            if (response.ok) {
                console.log("Budget saved")
                alert("Budget data has been successfully saved!")
            }
        } catch (error) {
            console.log("Failed to save budget: ", error);
        }
    };

    return (
        <button
            className="black_btn"
            onClick={saveAndUpdate}
        >
            Save Budget
        </button>
    );
};

export default BudgetSave;
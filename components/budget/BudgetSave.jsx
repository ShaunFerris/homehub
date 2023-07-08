"use client";

import { BudgetContext } from "@/context/BudgetContext";
import { useContext } from "react";

const BudgetSave = ({ params }) => {
    const { budgetData } = useContext(BudgetContext);

    const saveAndUpdate = async () => {
        try {
            await fetch(`api/budget/${params.id}`, {
                method: "PATCH",
                body: JSON.stringify({ ...budgetData })
            });
        } catch (error) {

        }
    };

    return (
        <div>BudgetSave</div>
    );
};

export default BudgetSave;
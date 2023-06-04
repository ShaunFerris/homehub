import { useContext, useState } from "react";
import { BudgetContext } from "@/context/BudgetContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const BudgetAmount = () => {
    const { budget, dispatch } = useContext(BudgetContext);
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
        <div className="flex justify-between p-2.5 items-center
        bg-blue-300 rounded-md">
            {editMode ?
                <EditBudget
                    budget={budget}
                    handleSaveEdit={handleSaveEdit}
                /> :
                <ViewBudget
                    handleEdit={handleEdit}
                    budget={budget}
                />
            }
        </div>
    );
};

export default BudgetAmount;
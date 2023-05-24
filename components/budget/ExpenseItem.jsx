import { useContext } from "react";
import { BudgetContext } from "@/context/budgetContext";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(BudgetContext);

    const handleDelete = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id
        });
    };

    return (
        <div>ExpenseItem</div>
    );
};

export default ExpenseItem;
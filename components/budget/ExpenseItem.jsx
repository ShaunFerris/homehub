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
        <li className="flex justify-between align-middle items-center px-5">
            {props.name}
            <div className="flex flex-row">
                <span>
                    {props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDelete} />
            </div>
        </li>
    );
};

export default ExpenseItem;
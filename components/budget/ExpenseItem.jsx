import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext";
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
    <li
      className="flex justify-between items-center px-5 p-2
        border-b border-gray-500"
    >
      {props.name}
      <div className="flex flex-row">
        <span>{props.cost}</span>
        <TiDelete size="1.5em" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default ExpenseItem;

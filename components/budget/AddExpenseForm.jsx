import { useState, useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = ({ budgetData }) => {
    const { dispatch } = useContext(BudgetContext);

    const [budget, setBudgetData] = useState(budgetData);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const oldOnSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: expense
        });
    };

    const addExpense = (event) => {
        event.preventDefault();

        const newExpense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        setBudgetData({
            ...budget,
            expenseList: [...budget.expenseList, newExpense]
        });
    };

    return (
        <div className="card_container_vert w-full mb-4">
            <h1 className="subhead_text text-center">
                Add Expense
            </h1>
            <form onSubmit={addExpense} className="flex flex-row gap-4
            items-center justify-between mt-4">
                <div className="w-full">
                    <input
                        className="form_input border border-black
                        focus:placeholder-transparent"
                        required="required"
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className="w-full">
                    <input
                        className="form_input border border-black
                        focus:placeholder-transparent"
                        required="required"
                        type="text"
                        id="cost"
                        placeholder="Cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="black_btn" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddExpenseForm;
import { useState, useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
    const { dispatch } = useContext(BudgetContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
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

    return (
        <div className="card_container_vert w-full mb-4">
            <h1 className="subhead_text text-center">
                Add Expense
            </h1>
            <form onSubmit={onSubmit} className="flex flex-row gap-4
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
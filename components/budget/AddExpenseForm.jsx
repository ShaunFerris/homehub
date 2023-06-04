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
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        className="form_input"
                        required="required"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <input
                        className="form_input"
                        required="required"
                        type="text"
                        id="cost"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="black_btn mt-3" type="submit">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
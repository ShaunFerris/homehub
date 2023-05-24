import { useState, useContext } from "react";
import { BudgetContext } from "@/context/budgetContext";
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
            cost: parseInte(cost)
        };
    };

    dispatch({
        type: "ADD_EXPENSE",
        payload: expense
    });

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
            </div>
        </form>
    );
};

export default AddExpenseForm;
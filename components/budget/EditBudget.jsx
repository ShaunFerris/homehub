import { useState } from "react";

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);

    return (
        <>
            <input
                className="mr-3 form_input border border-black
                [appearance:textfield] focus:placeholder-transparent"
                required="required"
                type="number"
                id="budgetAmount"
                placeholder={value}
                onChange={(event) => setValue(event.target.value)}
            />

            <button
                className="black_btn"
                onClick={() => {
                    return props.handleSaveEdit(value);
                }}
            >
                Save
            </button>
        </>
    );
};

export default EditBudget;
import { useState } from "react";

const EditBudget = ({ budget, handleSaveEdit }) => {
  const [value, setValue] = useState(budget);

  return (
    <>
      <input
        className="mr-3 form_input border border-black
                [appearance:textfield] focus:placeholder-transparent"
        required={true}
        type="number"
        id="budgetAmount"
        placeholder={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        className="black_btn"
        onClick={() => {
          return handleSaveEdit(value);
        }}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;

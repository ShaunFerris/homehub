const ViewBudget = ({ budget, handleEdit }) => {
  return (
    <>
      <span data-test="budget-startingAmountDisplay">
        Starting budget: ${budget}
      </span>
      <button className="black_btn" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;

const ViewBudget = ({ budget, handleEdit }) => {
  return (
    <>
      <span>Starting budget: ${budget}</span>
      <button className="black_btn" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;

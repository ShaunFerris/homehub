const ViewBudget = ({ budget, handleEdit }) => {
    return (
        <>
            <span>Budget: ${budget}</span>
            <button className="black_btn" onClick={handleEdit}>
                Edit
            </button>
        </>
    );
};

export default ViewBudget;
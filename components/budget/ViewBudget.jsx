const ViewBudget = (props) => {
    return (
        <>
            <span>Budget: ${props.budget}</span>
            <button className="black_btn" onClick={props.handleEdit}>
                Edit
            </button>
        </>
    );
};

export default ViewBudget;
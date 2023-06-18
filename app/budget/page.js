import BudgetSelectPage from "@/components/budget/BudgetSelectPage";


const BudgetList = () => {
    return (
        <section className="flex flex-col items-center w-full
        justify-between">
            <h1 className="head_text text-center mb-5 blue_gradient
            py-2">
                Budget Tracking
            </h1>
            <h1 className="subhead_text text-center">
                Choose an existing budget or make a new one.
            </h1>
            <BudgetSelectPage />
        </section>
    );
};

export default BudgetList;
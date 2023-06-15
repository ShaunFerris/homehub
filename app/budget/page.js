import React from 'react';

const BudgetList = () => {
    const addBudget = async ({ name, budgetAmount }) => {
        try {
            const response = await fetch("api/budget/newBudget", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    budgetAmount: budgetAmount,
                    expenseList: []
                })
            });
            if (response.ok) {
                console.log("Created a new budget");
            }
        } catch (error) {

        }
    };

    const getBudgets = async () => {
        
    }

    return (
        <section>
            <div className='card_container_long'>
                <ul>

                </ul>
                <form className='mt-4'>
                    <input className='border border-black' placeholder='budget amount'></input>
                    <input className='border border-black' placeholder='budget name'></input>
                </form>
                <button className='black_btn'>Add a new budget tracker</button>
            </div>
        </section>
    );
};

export default BudgetList;
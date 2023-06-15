"use client";

import { useState } from "react";

const BudgetList = () => {
    const [budget, setBudget] = useState({
        name: "", budgetAmount: 0, expenseList: []
    });

    const addBudget = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("api/budget/newBudget", {
                method: "POST",
                body: JSON.stringify({
                    name: budget.name,
                    budgetAmount: budget.budgetAmount,
                    expenseList: budget.expenseList
                })
            });
            if (response.ok) {
                console.log("Created a new budget");
                setBudget({
                    name: "", budgetAmount: 0, expenseList: []
                });
            }
        } catch (error) {

        }
    };

    const getBudgets = async () => {

    };

    return (
        <section>
            <div className='card_container_long'>
                <ul>

                </ul>
                <form className='mt-4' onSubmit={addBudget}>
                    <input
                        className='border border-black'
                        placeholder='budget amount'
                        value={budget.budgetAmount}
                        onChange={(event) => setBudget({
                            ...budget,
                            budgetAmount: event.target.value
                        })}
                    />
                    <input
                        className='border border-black'
                        placeholder='budget name'
                        value={budget.name}
                        onChange={(event) => setBudget({
                            ...budget,
                            name: event.target.value
                        })}
                    />
                    <button
                        className='black_btn'
                    >
                        Add a new budget tracker
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BudgetList;
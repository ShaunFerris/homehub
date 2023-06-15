"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";


const BudgetList = () => {
    const { status } = useSession();

    const [budget, setBudget] = useState({
        name: "", budgetAmount: 0, expenseList: []
    });
    const [budgetList, setBudgetList] = useState("");

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

    useEffect(() => {
        const getBudgets = async () => {
            try {
                const response = await fetch("api/budget");
                const data = await response.json();
                setBudgetList(data);
            } catch (error) {
                console.log("Failed to fetch budgets: ", error);
            }

        };
        getBudgets();
    }, []);

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>;
    }

    return (
        <section>
            <div className='card_container_long'>
                <ul>
                    {budgetList === "" ? <p>No budgets available</p> :
                        budgetList.map((b) => (
                            <li key={b.name}>
                                <Link
                                    href={`/budget/${b._id}`}
                                >
                                    {b.name}
                                </Link>
                            </li>
                        ))
                    }
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
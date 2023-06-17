"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";


const BudgetList = () => {
    const { status } = useSession();

    const router = useRouter();

    const [budget, setBudget] = useState({
        name: "", budgetAmount: "", expenseList: []
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
                const data = await response.json();
                router.push(`/budget/${data._id.toString()}`);
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
    }, [budget]);

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>;
    }

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
            <div className='card_container_long'>
                <ul>
                    {budgetList === "" ? <Loader /> :
                        budgetList.length === 0 ?
                            <p>No budgets available</p> :
                            budgetList.map((b) => (
                                <li key={b.name}>
                                    <Link
                                        href={
                                            `/budget/${b._id.toString()}`}
                                    >
                                        {b.name}
                                    </Link>
                                </li>
                            ))
                    }
                </ul>
                <hr className="bg-black my-4" />
                <h1 className="subhead_text">
                    Add a new budget tracker
                </h1>
                <form className='mt-4 flex flex-col space-y-2'
                    onSubmit={addBudget}>
                    <div className="flex flex-row space-x-4">
                        <input
                            className='form_input border border-black
                        focus:placeholder-transparent'
                            placeholder='budget amount'
                            value={budget.budgetAmount}
                            onChange={(event) => setBudget({
                                ...budget,
                                budgetAmount: event.target.value
                            })}
                        />
                        <input
                            className='form_input border border-black
                        focus:placeholder-transparent'
                            placeholder='budget name'
                            value={budget.name}
                            onChange={(event) => setBudget({
                                ...budget,
                                name: event.target.value
                            })}
                        />
                    </div>
                    <button
                        className='black_btn'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BudgetList;
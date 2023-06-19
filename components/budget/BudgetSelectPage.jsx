"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";

const BudgetSelectPage = () => {
    const { status } = useSession();

    const router = useRouter();

    const [budget, setBudget] = useState({
        name: "", budgetAmount: "", expenseList: []
    });

    const [hasUpdated, setHasUpdated] = useState(true);

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
                const response = await fetch("api/budget", {
                    next: {revalidate: 0}
                });
                const data = await response.json();
                setBudgetList(data);
            } catch (error) {
                console.log("Failed to fetch budgets: ", error);
            }

        };
        if (hasUpdated) {
            getBudgets();
            setHasUpdated(false);
        }
    }, [hasUpdated]);

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>;
    }

    return (
        <div className='card_container_long'>
            <ul>
                {budgetList === "" ? <Loader /> :
                    budgetList.length === 0 ?
                        <p>No budgets available</p> :
                        budgetList.map((b) => (
                            <li
                                className="flex flex-row
                            justify-between items-center px-5
                            p-2 border-b border-gray-500"
                                key={b.name}
                            >
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
    );
};

export default BudgetSelectPage;
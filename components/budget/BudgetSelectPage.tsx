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
    name: "",
    budgetAmount: "",
    expenseList: []
  });

  const [hasUpdated, setHasUpdated] = useState(true);

  const [budgetList, setBudgetList] = useState(null);

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
          name: "",
          budgetAmount: "",
          expenseList: []
        });
        const data = await response.json();
        router.push(`/budget/${data._id.toString()}`);
      }
    } catch (error) {}
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
    if (hasUpdated) {
      getBudgets();
      setHasUpdated(false);
    }
  }, [hasUpdated]);

  const handleClear = async () => {
    const hasConfirmed = confirm(
      "Are you sure you wish to clear all existing budgets?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch("api/budget", {
          method: "DELETE"
        });
        setHasUpdated(true);
        if (response.ok) {
          console.log("Successfully cleared budget list!");
        }
      } catch (error) {
        console.log("Failed to clear budget list: ", error);
      }
    }
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return <p data-test="access-msg">Access Denied</p>;
  }

  return (
    <div
      data-test="budget-selectPageWrapper"
      className="card_container_long"
    >
      <ul>
        <h1
          data-test="budget-selectHeading1"
          className="subhead_text"
        >
          Existing Budgets:
        </h1>
        {budgetList === null ? (
          <Loader />
        ) : budgetList.length === 0 ? (
          <p>No budgets available</p>
        ) : (
          budgetList.map((b) => (
            <li
              className="flex flex-row
                            justify-between items-center px-5
                            p-2 border-b border-gray-500"
              key={b.name}
            >
              <Link href={`/budget/${b._id.toString()}`}>
                {b.name}
              </Link>
            </li>
          ))
        )}
        <button
          className="delete_btn w-full mt-4"
          onClick={handleClear}
        >
          Clear budgets list
        </button>
      </ul>
      <hr className="bg-black my-4" />
      <h1 className="subhead_text">Add a new budget tracker</h1>
      <form
        className="mt-4 flex flex-col space-y-2"
        onSubmit={addBudget}
      >
        <div className="flex flex-row space-x-4">
          <input
            className="form_input border border-black
                        focus:placeholder-transparent"
            placeholder="budget amount"
            value={budget.budgetAmount}
            onChange={(event) =>
              setBudget({
                ...budget,
                budgetAmount: event.target.value
              })
            }
          />
          <input
            className="form_input border border-black
                        focus:placeholder-transparent"
            placeholder="budget name"
            value={budget.name}
            onChange={(event) =>
              setBudget({
                ...budget,
                name: event.target.value
              })
            }
          />
        </div>
        <button className="black_btn">Submit</button>
      </form>
    </div>
  );
};

export default BudgetSelectPage;

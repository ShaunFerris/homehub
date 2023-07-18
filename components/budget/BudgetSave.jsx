"use client";

import { BudgetContext } from "@/context/BudgetContext";
import { useParams } from "next/navigation";
import { useContext } from "react";

const BudgetSave = () => {
  const { budgetData } = useContext(BudgetContext);
  const params = useParams();

  const saveAndUpdate = async () => {
    try {
      const response = await fetch(`/api/budget/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({ ...budgetData }),
      });
      if (response.ok) {
        console.log("Budget saved");
        alert("Budget data has been successfully saved!");
      }
    } catch (error) {
      console.log("Failed to save budget: ", error);
    }
  };

  return (
    <button
      className="black_btn w-full"
      onClick={(e) => {
        e.preventDefault();
        saveAndUpdate();
      }}
    >
      Save Budget
    </button>
  );
};

export default BudgetSave;

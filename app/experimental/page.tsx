import React from "react";
import KanbanBoard from "@/components/todo/TodoKanbanBoard";

const ExpTodo = () => {
  return (
    <section className="flex flex-center flex-col w-full items-center justify-center">
      <div>ExpTodo</div>
      <KanbanBoard />
    </section>
  );
};

export default ExpTodo;

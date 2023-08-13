"use client";

import TodoAddForm from "@/components/todo/TodoAddForm";
import TodoTaskList from "@/components/todo/TodoTaskList";
import Loader from "@/components/Loader";
import { TodoProvider } from "@/context/TodoContext";
import { useSession } from "next-auth/react";

const Todo = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return <p data-test="access-msg">Access Denied</p>;
  }

  return (
    <TodoProvider>
      <section
        className="flex flex-col items-center w-full
            justify-between"
      >
        <h1 data-test="todo-title" className="head_text text-center">
          TODO List
        </h1>
        <TodoAddForm />
        <div
          data-test="todo-listContainer"
          className="flex flex-col items-center w-full
                justify-between gap-4"
        >
          <div
            data-test="todo-pendingListContainer"
            id="pending_list"
            className="w-full"
          >
            <TodoTaskList
              data-test="todo-pendingList"
              title="Pending Tasks"
              emptyMsg="There are no pending tasks"
              renderCondition={false}
            />
          </div>
          <div
            data-test="todo-completedListContainer"
            id="complete-list"
            className="w-full mb-8"
          >
            <TodoTaskList
              data-test="todo-completedList"
              title="Completed Tasks"
              emptyMsg="There are no completed tasks"
              renderCondition={true}
            />
          </div>
        </div>
      </section>
    </TodoProvider>
  );
};

export default Todo;

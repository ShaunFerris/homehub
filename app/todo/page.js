"use client";

import TodoAddForm from "@/components/todo/TodoAddForm";
import TodoTaskList from "@/components/todo/TodoTaskList";
import { TodoProvider } from "@/context/TodoContext";

const Todo = () => {
    return (
        <TodoProvider>
            <section className="flex flex-col items-center w-full
            justify-between">
                <h1 className="head_text text-center">
                    TODO List
                </h1>
                <TodoAddForm />
                <div className="flex flex-col items-center w-full
                justify-between gap-4">
                    <div id="pending_list" className="w-full">
                        <TodoTaskList
                            title="Pending Tasks"
                            emptyMsg="There are no pending tasks"
                            renderCondition={false}
                        />
                    </div>
                    <div id="complete-list" className="w-full">
                        <TodoTaskList
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
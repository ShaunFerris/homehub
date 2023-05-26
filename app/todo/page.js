"use client";

import TodoAddForm from "@/components/todo/TodoAddForm";
import PendingList from "@/components/todo/PendingList";
import CompleteList from "@/components/todo/CompleteList";
import { TodoProvider } from "@/context/TodoContext";

const Todo = () => {
    return (
        <TodoProvider>
            <section className="flex flex-col items-center w-full
            justify-between">
                <h1 className="head_text text-center mb-5">
                    TODO List
                </h1>
                <TodoAddForm />
                <div className="flex flex-row items-center w-full
                justify-between gap-4">
                    <div id="pending_list" className="w-full">
                        <PendingList />
                    </div>
                    <div id="complete-list" className="w-full">
                        <CompleteList />
                    </div>
                </div>
            </section>
        </TodoProvider>
    );
};

export default Todo;
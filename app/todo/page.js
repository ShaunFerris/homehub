"use client";

import TodoAddForm from "@/components/todo/TodoAddForm";
import PendingList from "@/components/todo/PendingList";
import CompleteList from "@/components/todo/CompleteList";
import { TodoProvider } from "@/context/TodoContext";

const Todo = () => {
    return (
        <TodoProvider>
            <section className="flex flex-col items-center w-full
                jutify-between">
                <h1 className="head_text text-center mb-5">
                    TODO List
                </h1>
                <TodoAddForm />

            </section>
        </TodoProvider>
    );
};

export default Todo;
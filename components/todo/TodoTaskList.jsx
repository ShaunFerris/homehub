import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoTaskItem from "./TodoTaskItem";

const TodoTaskList = ({ title, emptyMsg, renderCondition }) => {
    const { todoTasks } = useContext(TodoContext);

    const tasksToDisplay = todoTasks.data === null ?
        null : todoTasks.data.filter((task) => {
            return task.complete === renderCondition;
        });

    const handleStatusToggle = async (task) => {
        try {
            const response = await fetch("/api/todo", {
                method: "PATCH",
                body: JSON.stringify({
                    ...task
                })
            });
            if (response.ok) {
                console.log("Updated one tasks status!");
            }
        } catch (error) {
            console.log("Failed to toggle task status: ", error);
        }
    };

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                {title}
            </h1>
            {!tasksToDisplay ? (
                <p className='desc_2 text-center'>
                    {emptyMsg}
                </p>
            ) : (
                <ul>
                    {tasksToDisplay.map((task) => (
                        <TodoTaskItem
                            key={task.name}
                            task={task}
                            toggleStatus={handleStatusToggle}
                        />
                    ))}
                </ul>
            )

            }
        </div>
    );
};

export default TodoTaskList;
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoTaskItem from "./TodoTaskItem";
import Loader from "../Loader";

const TodoTaskList = ({ title, emptyMsg, renderCondition }) => {
  const { todoTasks, setStateChange } = useContext(TodoContext);

  const tasksToDisplay =
    todoTasks === null
      ? ""
      : todoTasks.filter((task) => {
          return task.complete === renderCondition;
        });

  const handleStatusToggle = async (task) => {
    try {
      const response = await fetch("/api/todo", {
        method: "PATCH",
        body: JSON.stringify({
          ...task,
        }),
      });
      setStateChange(true);
      if (response.ok) {
        console.log("Updated one tasks status!");
      }
    } catch (error) {
      console.log("Failed to toggle task status: ", error);
    }
  };

  const handleDelete = async (task) => {
    const hasConfirmed = confirm(
      "Are you sure you wish to delete this task?",
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(
          `/api/todo/${task._id.toString()}`,
          {
            method: "DELETE",
          },
        );
        setStateChange(true);
        if (response.ok) {
          console.log("Deleted one task!");
        }
      } catch (error) {
        console.log("Failed to delete task: ", error);
      }
    }
  };

  return (
    <div className="card_container_vert">
      <h1 className="subhead_text text-center">{title}</h1>
      {tasksToDisplay === "" ? (
        <Loader />
      ) : tasksToDisplay.length === 0 ? (
        <p className="desc_2 text-center">{emptyMsg}</p>
      ) : (
        <ul>
          {tasksToDisplay.map((task) => (
            <TodoTaskItem
              key={task.name}
              task={task}
              toggleStatus={handleStatusToggle}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoTaskList;

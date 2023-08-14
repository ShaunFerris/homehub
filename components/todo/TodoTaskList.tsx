import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import TodoTaskItem from "./TodoTaskItem";
import Loader from "../Loader";

const TodoTaskList = ({ title, emptyMsg, renderCondition }) => {
  const { todoTasks, setStateChange } = useContext(TodoContext);

  const test =
    title === "Pending Tasks"
      ? "todo-pendingList"
      : "todo-completedList";

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
          ...task
        })
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
      "Are you sure you wish to delete this task?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(
          `/api/todo/${task._id.toString()}`,
          {
            method: "DELETE"
          }
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

  const handleClear = async () => {
    const hasConfirmed = confirm(
      "Are you sure you wish to clear this list?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch("/api/todo", {
          method: "DELETE",
          body: JSON.stringify({ renderCondition })
        });
        setStateChange(true);
        if (response.ok) {
          console.log("List cleared!");
        }
      } catch (error) {
        console.log("Failed to clear list: ", error);
      }
    }
  };

  return (
    <div data-test={test} className="card_container_vert">
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
      <button
        data-test="shoplist-clear"
        className="delete_btn w-full mt-4"
        onClick={handleClear}
      >
        Clear list
      </button>
    </div>
  );
};

export default TodoTaskList;

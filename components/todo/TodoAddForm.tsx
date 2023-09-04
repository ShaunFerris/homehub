import { useState, useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import { useSession } from "next-auth/react";

const TodoAddForm = () => {
  const { data: session } = useSession();
  const { setStateChange } = useContext(TodoContext);
  const [todo, setTodo] = useState({ name: "", complete: false });
  const [invalidName, setInvalidName] = useState(false);

  const createTodo = async (event) => {
    event.preventDefault();

    if (todo.name === "") {
      setInvalidName(true);
      return;
    }

    try {
      const response = await fetch("/api/todo/newItem/", {
        method: "POST",
        body: JSON.stringify({
          task: todo.name,
          complete: todo.complete,
          userID: session?.user.id
        })
      });
      setStateChange(true);
      if (response.ok) {
        console.log("Todo task created!");
        setTodo({ name: "", complete: false });
      }
      setInvalidName(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-test="todo-formWrapper"
      className="card_container_long flex flex-col"
    >
      <form
        data-test="todo-addItemForm"
        className="flex flex-row gap-4"
        onSubmit={createTodo}
      >
        <div id="todo_input" className="w-4/5">
          <input
            data-test="todo-input"
            className="form_input border border-black"
            placeholder="Add a todo..."
            value={todo.name}
            onChange={(event) =>
              setTodo({
                ...todo,
                name: event.target.value
              })
            }
          />
        </div>
        <div
          id="todo_buttons"
          className="w-1/5 flex flex-row
                justify-center"
        >
          <button data-test="todo-submitButton" className="black_btn w-full">
            Submit
          </button>
        </div>
      </form>
      {invalidName ? (
        <p data-test="todo-invalidTaskMsg" className="text-red-500 mt-2">
          Please enter a valid name for your task
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoAddForm;

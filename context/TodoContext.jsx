import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [stateChange, setStateChange] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/todo");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log("Failed to fetch todos: ", error);
      }
    };
    if (stateChange) {
      fetchTasks();
      setStateChange(false);
    }
  }, [stateChange]);

  return (
    <TodoContext.Provider
      value={{
        todoTasks: tasks,
        stateChange: stateChange,
        setStateChange: setStateChange
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

import { createContext, useReducer } from "react";

const TodoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTasks = async () => {
    try {
        const response = await fetch("/api/todo");
        const data = await response.json();
        console.log("Successfully fetched: ", data);
        return data;
    } catch (error) {
        console.log("Failed to fetch todotasks: ", error);
    }
};

const initialState = fetchTasks().then(result => {
    result;
});

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <TodoContext.Provider
            value={{
                todoTasks: state,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};
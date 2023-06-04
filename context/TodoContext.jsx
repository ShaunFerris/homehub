import { createContext, useReducer } from "react";

const TodoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTasks = async () => {
    const response = await fetch("/api/todo");
    return response;
}

const initialState = fetchTasks();

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <TodoContext.Provider
            value={{
                tasks: state,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
import { createContext, useReducer } from "react";

const TodoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const initialState = {
    pendingTasks: [],
    completedTasks: []
};

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <TodoContext.Provider
            value={{
                pendingTasks: state.pendingTasks,
                completedTasks: state.completedTasks,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
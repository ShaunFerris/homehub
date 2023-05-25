import { createContext, useReducer } from "react";

const TodoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const initialState = {
    id: 10,
    name: "placeholder task name",
    pending: true,
    user: "Admin",
    timeStamp: new Date()
};

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    return (
        <TodoContext.Provider
            value={{
                id: state.id,
                name: state.name,
                pending: state.pending,
                user: state.user,
                timeStamp: state.timeStamp,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
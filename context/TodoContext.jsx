import { createContext, useReducer, useEffect, useState } from "react";

const TodoReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: null
            };
        case "FETCH_FAILURE":
            return {
                loading: false,
                data: null,
                error: action.payload
            };
        default:
            return state;
    }
};

const initialState = {
    loading: true,
    data: null,
    error: null
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const [stateChange, setStateChange] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("/api/todo", {
                    method: "GET"
                });
                const data = await response.json();

                dispatch({ type: "FETCH_SUCCESS", payload: data });
            } catch (error) {
                dispatch({ type: "FETCH_FAILURE", payload: error.message });
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
                todoTasks: state,
                dispatch: dispatch,
                setStateChange: setStateChange
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
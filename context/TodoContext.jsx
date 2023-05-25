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
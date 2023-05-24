import { createContext, useReducer } from "react";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: true
            };
        case "LOGOUT":
            return {
                isLoggedIn: false
            };
        default: return state;
    }
};

const initialState = {
    isLoggedIn: false
};

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: state.isLoggedIn,
                dispatch
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
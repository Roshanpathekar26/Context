// src/context/GlobalStateContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
    count: 0,
};

// Create context
const GlobalStateContext = createContext(initialState);

// Define a reducer function
const globalReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the context
export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

import React, { useState } from 'react';
import { useGlobalState } from './assets/contextGlobalsatecontext';
import './App.css';
import './index.css';

const App = () => {
    const { state, dispatch } = useGlobalState();
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`App ${theme}-theme`} style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default App;

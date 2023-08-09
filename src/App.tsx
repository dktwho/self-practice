import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title = 'What to learn'
    const title2 = 100200
    const title3 = true
    const title22 = 'What to buy'

    return (
        <div className="App">
            <Todolist title={title} title2={title2}/>
            <Todolist title={title22} title3={title3} />
        </div>
    );
}

export default App;

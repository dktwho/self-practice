import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    return (
        <div className="App">
            <Todolist title={'What tot learn'}/>
            <Todolist title={'What tot buy'}/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1 = 'What to learn'
    const title2 = 'What to buy'

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    const tasks2 = [
        {id: 1, title: 'Buy Milk', isDone: true},
        {id: 2, title: 'Buy water', isDone: false},
        {id: 3, title: 'Buy Bread', isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title = 'What to learn'
    const title2 = 100200
    const title3 = true
    const title22 = 'What to buy'

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
            <Todolist title={title} title2={title2} tasks={tasks1}/>
            <Todolist title={title22} title3={title3} tasks={tasks2} />
        </div>
    );
}

export default App;

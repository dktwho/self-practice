import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const title1 = 'What to learn'


    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]



    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>

        </div>
    );
}

export default App;

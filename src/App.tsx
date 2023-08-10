import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const title1 = 'What to learn'


    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))

    }


    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks} removeTask={removeTask}/>

        </div>
    );
}

export default App;

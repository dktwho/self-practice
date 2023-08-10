import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const [filter, setFilter] = useState('all')
    const title1 = 'What to learn'

    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const taskFilter = () => {
        console.log('task filter')
    }



    return (
        <div className="App">
            <Todolist
                title={title1}
                tasks={tasks}
                removeTask={removeTask}
                taskFilter={taskFilter}
               />
        </div>
    );
}

export default App;

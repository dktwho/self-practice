import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const title1 = 'What to learn'


    let filteredTasks = tasks
    if (filter === 'active') {
        filteredTasks = tasks.filter(el => el.isDone === true)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(el => el.isDone === false)
    }


    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist
                title={title1}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;

import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { Todolist} from "./Todolist";
import {v4} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed'
export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: v4(), title: 'HTML&CSS', isDone: true},
        {id: v4(), title: 'Javascript', isDone: true},
        {id: v4(), title: 'React', isDone: false},
        {id: v4(), title: 'Vue', isDone: false},
        {id: v4(), title: 'Angular', isDone: false},
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

    const addTask = (newTitle: string) => {
        let newTask = {id: v4(), title: newTitle, isDone: false}
        setTasks([newTask, ...tasks])
    }


    const removeTask = (id: string) => {
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
                addTask={addTask}
            />
        </div>
    );
}

export default App;

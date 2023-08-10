import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

export type FilterType = 'all' | 'active' | 'completed'
function App() {
    const [tasks, setTasks] = useState<TasksType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'Javascript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    const [valueFilter, setValueFilter] = useState<FilterType>('all')

    const title1 = 'What to learn'

    let filter = tasks
    if(valueFilter === 'active') {
        filter = tasks.filter(el => el.isDone === true)
    }
    if(valueFilter === 'completed') {
        filter = tasks.filter(el => el.isDone === false)
    }

    const taskFilter = (value: FilterType) => {
        setValueFilter(value)
    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
    }


    return (
        <div className="App">
            <Todolist
                title={title1}
                tasks={filter}
                removeTask={removeTask}
                taskFilter={taskFilter}
               />
        </div>
    );
}

export default App;

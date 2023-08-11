import {FilterValuesType, TasksType} from "./App";
import {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask}: PropsType) => {
    const [inputValue, setInputValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        addTask(inputValue)
        setInputValue('')
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }


    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       onChange={onChange}
                       onKeyPress={onKeyPressHandler}
                       value={inputValue}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone} readOnly/>
                            <span>{task.title}</span>
                            <button onClick={() => removeTask(task.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => changeFilter('all')}>All</button>
                <button onClick={() => changeFilter('active')}>Active</button>
                <button onClick={() => changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )

}
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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

    const onChangeFilterHandler = (value: FilterValuesType) => {
        changeFilter(value)
    }

    const removeTaskHandler = (id: string) => {
        removeTask(id)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       value={inputValue}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <ul>
                {tasks.map(task => {
                    // const removeTaskHandlerInsideMap = () => {
                    //     removeTask(task.id)
                    // }

                    return (
                        <li key={task.id}><input type="checkbox" checked={task.isDone} readOnly/>
                            <span>{task.title}</span>
                            {/*<button onClick={() => removeTask(task.id)}>x</button>*/}
                            {/*<button onClick={removeTaskHandlerInsideMap}>x</button>*/}
                            <button onClick={() => removeTaskHandler(task.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onChangeFilterHandler('all')}>All</button>
                <button onClick={() => onChangeFilterHandler('active')}>Active</button>
                <button onClick={() => onChangeFilterHandler('completed')}>Completed</button>
            </div>
        </div>
    )

}
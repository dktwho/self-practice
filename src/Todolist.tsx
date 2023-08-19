import {FilterValuesType, TasksType} from "./App";
import {ChangeEvent, useState} from "react";
import {Button} from "./components/Button";
import S from './App.module.css'


type PropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
    changeCheckBoxStatus: (id: string, isDone: any) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter, addTask, changeCheckBoxStatus}: PropsType) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTaskHandler = () => {
        if (inputValue.trim()) {
            addTask(inputValue.trim())
            setInputValue('')
        } else {
            setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInputValue(e.currentTarget.value)
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

    const result = tasks.map(task => {
        // const removeTaskHandlerInsideMap = () => {
        //     removeTask(task.id)
        // }

        const changeBoxStatusHandler = (tId: string, isDone: boolean) => {
            changeCheckBoxStatus(tId, isDone)
        }


        return (
            <li key={task.id}>
                <input

                    type="checkbox"
                    checked={task.isDone}
                    onChange={(e) => changeBoxStatusHandler(task.id, !task.isDone)}/>
                <span>{task.title}</span>
                {/*<button onClick={() => removeTask(task.id)}>x</button>*/}
                {/*<button onClick={removeTaskHandlerInsideMap}>x</button>*/}
                {/*<button onClick={() => removeTaskHandler(task.id)}>x</button>*/}
                <Button title='x' callback={() => removeTaskHandler(task.id)}/>
            </li>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"
                       className={error ? S.error : ''}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       value={inputValue}/>
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <Button title={'add'} callback={addTaskHandler}/>
            </div>
            <ul>
                {result}
            </ul>
            <div>
                {/*<button onClick={() => onChangeFilterHandler('all')}>All</button>*/}
                {/*<button onClick={() => onChangeFilterHandler('active')}>Active</button>*/}
                {/*<button onClick={() => onChangeFilterHandler('completed')}>Completed</button>*/}
                <Button title={'All'} callback={() => onChangeFilterHandler('all')}/>
                <Button title={'Active'} callback={() => onChangeFilterHandler('active')}/>
                <Button title={'Completed'} callback={() => onChangeFilterHandler('completed')}/>
            </div>
        </div>
    )

}
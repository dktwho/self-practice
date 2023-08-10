type PropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
    taskFilter: () => void

}

export type TasksType = {
    id: number
    title: string
    isDone: boolean

}
export const Todolist = ({title, tasks, removeTask, taskFilter}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
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
                <button onClick={() => taskFilter() }>All</button>
                <button onClick={() => taskFilter() }>Active</button>
                <button onClick={() => taskFilter() }>Completed</button>
            </div>
        </div>
    )

}
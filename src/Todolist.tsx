type PropsType = {
    title: string
    tasks: TasksType[]
    removeTask: (id: number) => void
    taskFilter: (value: string) => void

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
                <button onClick={() => taskFilter('all') }>All</button>
                <button onClick={() => taskFilter('active') }>Active</button>
                <button onClick={() => taskFilter('completed') }>Completed</button>
            </div>
        </div>
    )

}
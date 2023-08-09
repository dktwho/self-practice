type PropsType = {
    title: string
    tasks: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean

}
export const Todolist = ({title, tasks}: PropsType) => {
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
                        <li key={task.id}><input type="checkbox" checked={task.isDone} readOnly/> <span>{task.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}
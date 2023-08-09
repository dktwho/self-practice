
type PropsType = {
    title: string
    title2?: number
    title3?: boolean
    tasks: TasksType[]
}

type TasksType = {
    id: number
    title: string
    isDone: boolean

}
export const Todolist = ({title, title2, title3,tasks}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <h3>{title2}</h3>
            <h3>{title3}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span></li>
                <li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].title}</span></li>
                <li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}
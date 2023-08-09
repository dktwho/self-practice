
type PropsType = {
    title: string
    title2?: number | boolean
}
export const Todolist = ({title, title2}: PropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <h3>{title2}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/> <span>HTML</span></li>
                <li><input type="checkbox" checked={true}/> <span>CSS</span></li>
                <li><input type="checkbox" checked={false}/> <span>REACT</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}
import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist2} from "./Todolist2";


type ObjectType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";


function App2() {

    const [todo, setTodo] = useState<Array<ObjectType>>([
        {
            title: "What to learn",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS", isDone: true},
                {taskId: v1(), title: "JS", isDone: true}
            ],
            students: [
                'Rick Kane',
                'Finnlay Bentley',
                'Samia North',
                'Isaac Morton',
            ]
        },
        {
            title: "What to do",
            filter: "all",
            tasks: [
                {taskId: v1(), title: "HTML&CSS2", isDone: true},
                {taskId: v1(), title: "JS2", isDone: true}
            ],
            students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
            ]
        }
    ])

    function removeTask(taskId: string, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {
            ...el,
            tasks: [...el.tasks.filter(fl => fl.taskId !== taskId)]
        } : el))
    }

    function addTask(title: string, todolistId: number) {
        let newTask: TasksType = {taskId: v1(), title: title, isDone: false};
        setTodo(todo.map((el, index) => index === todolistId ? {...el, tasks: [newTask, ...el.tasks]} : el))
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {
            ...el,
            tasks: el.tasks.map(m => m.taskId === taskId ? {...m, isDone: isDone} : m)
        } : el))
    }

    function changeFilter(value: FilterValuesType, todolistId: number) {
        setTodo(todo.map((el, index) => index === todolistId ? {...el, filter: value} : el))
    }

    function removeTodolist(todolistId: number) {
        setTodo(todo.filter((el, index) => index !== todolistId))
    }

    return (
        <div className="App">
            {
                todo.map((tl, index) => {
                    let allTodolistTasks = tl.tasks;
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist2
                        key={index}
                        id={index}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        students={tl.students}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                    />
                })
            }

        </div>
    );
}

export default App2;
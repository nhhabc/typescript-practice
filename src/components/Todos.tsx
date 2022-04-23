import { useContext } from "react"
import { TodoContext } from "../store/todos-context"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css'

const Todos = () => {
    const todoCtx = useContext(TodoContext)

    return (
        <ul className={classes.todos}>
            {todoCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/>
            )}
        </ul>
    )
}

export default Todos
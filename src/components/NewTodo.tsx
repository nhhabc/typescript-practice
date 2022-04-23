import React, { SetStateAction, useContext, useState } from "react"
import { TodoContext } from "../store/todos-context"

import classes from './NewTodo.module.css'

const NewTodo = () => {
    const [enteredText, setEnteredText] = useState('')
    const todoCtx = useContext(TodoContext)

    const getValue = (e: { target: { value: SetStateAction<string> } }) => {
        setEnteredText(e.target.value)
    }

    const onSubmitHandle = (e: React.FormEvent) => {
        e.preventDefault();
        if(enteredText.trim().length === 0) return;

        todoCtx.addTodo(enteredText)
    }

    return <form className={classes.form} onSubmit={onSubmitHandle}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" onChange={getValue}/>
        <button type="submit">Add Todo</button>
    </form>
}

export default NewTodo
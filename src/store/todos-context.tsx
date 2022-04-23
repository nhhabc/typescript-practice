import React, {useState} from "react";
import Todo from "../models/todo";

type TodoContextObj = {
    items:Todo[];
    addTodo:(text: string)=>void;
    removeTodo:(id: string) => void
}

export const TodoContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo:(id: string) => {}
});

const TodosContextProvider = (props:any) => {
    const [allTodos, setAllTodos] = useState<Todo[]>([])

  const addTodoHandle = (text:string) => {
    const newTodo = new Todo(text)
    setAllTodos(prevTodos => [...prevTodos, newTodo])
  }

  const onRemoveTodo = (todoId: string) => {
    setAllTodos(prevTodos => prevTodos.filter(todos => todos.id !== todoId))
  }

  const contextValue:TodoContextObj = {
      items: allTodos,
      addTodo: addTodoHandle,
      removeTodo: onRemoveTodo
  }

    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
}

export default TodosContextProvider;
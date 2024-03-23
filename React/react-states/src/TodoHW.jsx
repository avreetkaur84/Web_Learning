import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoHW() {
    let [todos, setTodos] = useState([{task: "Sample Task", id: uuidv4(), isDone: "false"}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markReadAll = () => {
        setTodos(todos.map((todo) => {
            return{
                ...todos,
                isDone: true
            }
        }));
        console.log(todos);
    }

    
    return(
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br><br></br>
            <button onClick={addNewtask}>Add</button>
            <br/><br/><br/>
            <hr></hr>
            <h2>Tasks Todo</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                    ))
                }
            </ul>
            <button onClick={markReadAll}>Mark as Read</button>
        </div>
    );
}
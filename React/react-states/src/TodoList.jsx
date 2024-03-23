import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "Sample Task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone= () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                isDone: true
            }
        }));
    }

    let markAsDone = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    isDone: true
                }
            } else {
                return todo;
            }  
        }));
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
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    );
}
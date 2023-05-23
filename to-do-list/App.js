import './App.css';
import { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [todoEditing, settodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("")

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        }

        const newTodoList = [...todoList, task];
        setTodoList(newTodoList);
    }

    const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) => {
            return task.id !== id;
        })
        setTodoList(newTodoList);
    }

    const editToDo = (id) => {
        const updatedTodos = [...todoList].map((task) => {
            if (task.id === id) {
                task.taskName = editingText
            }
            return task
        })
        setTodoList(updatedTodos)
        settodoEditing(null)
        setEditingText("")
    }

    return (
        <div className="App">
            <div className="addTask">
                <input onChange={handleChange}></input>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">

                <h3>To-Do-List:</h3>
                <hr></hr>
                {todoList.map((task) => {
                    console.log(task)
                    return <div>

                        {todoEditing === task.id
                            ? (<input type="text" onChange={(event) => setEditingText(event.target.value)} value={editingText}></input>)
                            : <span>{task.taskName}</span>}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        {todoEditing === task.id
                            ? (<button onClick={() => editToDo(task.id)} className='submitbtn'>Submit</button>)
                            : (<button className='updatebtn' onClick={() => settodoEditing(task.id)}>Update</button>)}
                        &nbsp;
                        <button onClick={() => deleteTask(task.id)} className='deletebtn'>x</button>
                        <hr></hr>
                    </div>
                })}
            </div>

        </div>
    );
};

export default App;

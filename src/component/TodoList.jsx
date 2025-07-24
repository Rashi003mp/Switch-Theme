import React from 'react'
import "./TodoList.css"
import { useState } from 'react'

function TodoList() {
    const [inputvalue, setInputvalue] = useState('');
    const [todo, setTodo] = useState([]);

    const Handlechange = (event) => {
        setInputvalue(() =>
            (event.target.value)
        )
    }
    const handletodo = () => {
        setTodo([...todo, inputvalue]);
        setInputvalue('')
    }
      const removeTask = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
        console.log(updatedTodo);
        
    }
    console.log(todo);

    return (
        <div>
            <h1>To-Do App</h1>
            <input type="text" placeholder='Add Task' value={inputvalue} onChange={Handlechange} />
            <button onClick={handletodo}>Add Task</button><br />
            {todo.map((tasks,index) =>
                <div className='task-item' key={index}>
                    {tasks}
                    <button onClick={()=>removeTask(index)}>Remove</button>
                </div>)}
            <button onClick={() => { setTodo([]) }}>Reset</button>

        </div>
    )
}

export default TodoList
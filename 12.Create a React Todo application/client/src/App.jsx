import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo =()=>{
    if(!task){
      alert("Enterr a task")
      return;
    }

    setTodo([...todo,task]);
    setTask("");
  }

  
  const deleteTodo=(id)=>{
    setTodo(todo.filter((_, i) => i != id))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTodo}>Add</button>


{todo.map((todo,i)=>{
  return (<div key={i}>
    <span>{todo}</span>
<button onClick={()=>deleteTodo(i)}>Delete</button>
  </div>)
})}




    </div>
  )
}
export default App;
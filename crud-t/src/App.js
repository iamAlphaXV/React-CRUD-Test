import { useState } from "react";
import "./App.css";

function App() {
  // function for adding to the list && list variable
  const [todoList, setTodoList] = useState([]);
  // Function for creating  a task value && task variable
  const [newTask, setNewTask] = useState("");

  // function that relates realtime value to newTask variable
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function that adds current captured value from newTask variable and adds it to todoList array by adding the current newTask + current todoList into an array called newTodoList.Then updates the Todolist array by setting its value to the newTodolist value
  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        {/* on any change the handleChange function is executed  */}
        <input onChange={handleChange} />
        {/* when the button is clicked the addTask function is executed  */}
        <button onClick={addTask}>Add Task</button>
      </div>
      {newTask}
      <div className="List">
        {/* the nth value of the todoList array is given the value of "task" and every value within the array is displayed becuse of the placeholder */}
        {todoList.map((task) => {
          return <h1>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;

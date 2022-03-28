import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
const App = () => {
  const [task, setTask] = useState("hi");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Learn Redux",
      isCompleted: false,
    },
  ]);

  return (
    <div className="todo-list">
      <Header />
      <div className="list-header">
        <h3>TODO LIST</h3>
        <input
          className="shadow"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="list-body">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <input type="checkbox" />
            <span>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;

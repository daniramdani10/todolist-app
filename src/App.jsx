import { useState } from "react";
import "./App.css";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";
import Button from "./components/Button";
import ListTask from "./components/ListTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index, text) => {
    if (!text.trim()) {
      return;
    }
    const newTasks = [...tasks];
    newTasks[index].text = text;
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );

    newTasks.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );

    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col mx-auto items-center h-screen mt-10 gap-4 w1/2">
      <div className="text-3xl font-bold">Todolist App</div>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded-lg px-4 border border-slate-400"
        />
        <Button variant="primary" onClick={addTask}>
          add
        </Button>
      </div>
      <div className="flex flex-col gap-4 h-screen w-80">
        <div className="text-xl font-medium">My Task</div>
        <div className="flex flex-col gap-2">
          {tasks.map((task, index) => (
            //  list
            <div key={index} className="flex gap-2">
              <ListTask task={task} index={index} toggleTask={toggleTask} />
              {/* button  */}
              <div className="flex gap-1 ml-auto">
                <Button
                  variant="primary"
                  onClick={() => updateTask(index, prompt("Update task"))}
                >
                  <Trash size={12} />
                </Button>
                <Button variant="danger" onClick={() => removeTask(index)}>
                  <Trash size={12} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

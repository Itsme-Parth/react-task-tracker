import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting 1",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting 2",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting 3",
      day: "Feb 6th",
      reminder: false,
    },
  ]);

  // leads to unlimilted re-renders
  //  setTasks({

  //   id: 3,
  //   text: "Meeting 3",
  //   day: "Feb 6th",
  //   reminder: true,
  // });

  //Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task
    ) 
    )
  } 

  //Add Task
  const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

   return (
    <div className='container'>
      <Header title = {"Task Tracker"} onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>) : ("No tasks to show")}
    </div>
  );
}

export default App;

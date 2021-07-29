import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
function App() {
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
      reminder: true,
    },
  ]);

  // leads to unlimilted re-renders
  //  setTasks({
  //   id: 3,
  //   text: "Meeting 3",
  //   day: "Feb 6th",
  //   reminder: true,
  // });

  //Create Task 
  
  //Delete Task
  const deleteTask = (id) => {
    console.log("delete", id)
  }

  // for(let singleTask of tasks)
  // {
  //   console.log(singleTask.id, singleTask.reminder);
  // }

   return (
    <div className='container'>
      <Header title = {"Task Tracker"} />
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;

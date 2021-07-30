import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {/* map takes in a function  */}
      {tasks.map((singleTask) => (
        <Task
          key={singleTask.id}
          task={singleTask}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

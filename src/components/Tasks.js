import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <>
      {/* map takes in a function  */}
      {tasks.map((singleTask, id) => (
        <Task key={id} task={singleTask} />
      ))}
    </>
  );
};

export default Tasks;

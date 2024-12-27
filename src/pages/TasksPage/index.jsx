import React, { useEffect, useState } from "react";
import Task from "../../components/Task";
import "./index.scss";
import TaskService from "../../api/task";
const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTasks = async () => {
    const tasks = await TaskService.getAllTasks();
    setTasks(tasks);
    setLoading(false);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <h1>Lista de tareas</h1>
      <div className="task--page--container">
    
    {loading
      ? "Cargando tareas..."
      : tasks &&
        tasks.map((task) => {
          return (
            <Task
              id={task.id}
              assigned_to={task.assigned_to}
              // comments={task.comments}
              description={task.description}
              title={task.title}
              status={task.status}
              key={task.id}
            />
          );
        })}
  </div>
    </>

  );
};

export default TasksPage
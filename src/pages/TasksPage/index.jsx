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

  console.log({tasks})

  return (
    <div className="tasks-page-container">
      <h1 className="tasks-page-title">Lista de tareas</h1>
      <div className="task-page-content">
        {loading ? (
          <p className="loading-text">Cargando tareas...</p>
        ) : (
          tasks &&
          tasks.sort((a,b)=>b.id - a.id) .map((task) => (
            <Task
              id={task.id}
              assigned_to={task.assigned_to}
              description={task.description}
              title={task.title}
              status={task.status}
              key={task.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TasksPage;
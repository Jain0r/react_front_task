import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import TaskService from "../../api/task";

const initialTask = {
  title: "",
  description: "",
  assigned_to: "",
};

const HomePage = () => {
  const [taskForm, setTaskForm] = useState(initialTask);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value });
  };
  const createTask = async () => {
    setLoading(true);
    await TaskService.createTask(taskForm);
    setLoading(false);
  };
  console.log({ taskForm });
  return (
    <div>
      <h1>Crear tarea</h1>
      <h2>Titulo</h2>
      <input
        type="text"
        name="title"
        placeholder="Tarea..."
        onChange={(e) => handleChange(e)}
      ></input>
      <h2>Descripción</h2>
      <textarea name="description" onChange={(e) => handleChange(e)}></textarea>

      <h2>Asignado</h2>
      <input
        type="text"
        name="assigned_to"
        placeholder="Asignado para"
        onChange={(e) => handleChange(e)}
      ></input>
      <div className="buttons--container">
        <button type="button" onClick={() => createTask()}>
          {loading ? "Subiendo..." : "Crear tarea"}
        </button>
        <button type="button" onClick={() => navigate("/tasks")}>
          Ir a lista de tareas
        </button>
      </div>
    </div>
  );
};

export default HomePage;

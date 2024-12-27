import React, { useState } from "react";
import "./index.scss";
import Comment from "../Comment";
import TaskService from "../../api/task";
const Task = ({ id, title, description, assigned_to, status }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [hideComments,setHideComments] =useState(true)

  const createComment = async () => {
    setLoading(true);
    await TaskService.createTaskComment(id, { user: "Sebastian", comment });
    window.location.reload();
  };

  const showComments = async () => {
    if (hideComments){
      const data = await TaskService.getCommentsByTask(id);
      setComments(data);
      setHideComments(false)
    }else {
      setHideComments(true)
    }

  };

  const changeStatus = async () => {
    await TaskService.changeTaskStatus(id);
    window.location.reload();
  };

  return (
    <div className="tasks--list--container">
      <div className="task--container">
        <strong>{title || "Tarea 1"}</strong>
        <p>{description || "Descripción"}</p>
        <span>Asignado a: {assigned_to || "Nadie"}</span>
        <p>Estado:{status || "Por ver"} </p>
      </div>
      <div style={{display:hideComments?"none":"block"}} >
      {comments &&
        comments.map((comment) => {
          return (
            <Comment
              user={comment.user}
              comment={comment.comment}
              key={comment.id}
              date={comment.timestamp}
            />
          );
        })}
      </div>
      <textarea
        placeholder="Agregar comentario"
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
<div className="task--cta" >
<button type="button" onClick={() => createComment()}>
        {loading ? "Subiendo..." : "Subir comentario"}
      </button>
      <button type="button" onClick={() => showComments()}>
      {hideComments? "Ver comentarios":"Ocultar comentarios"}
      </button>
      <button type="button" disabled={status==="completed"} onClick={() => changeStatus()}>
        {status === "completed" ? "Completado": "Cambiar a completado"}
      </button>
</div>
    </div>
  );
};

export default Task;
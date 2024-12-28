import React from "react";
import "./index.scss";
import { formatearFecha } from "../../helpers";

const Comment = ({ user, comment, date }) => {
  return (
    <div className="comment--container">
      <div className="comment--header">
        <strong className="comment--user">{user || "Usuario Anónimo"}</strong>
        <span className="comment--date">{formatearFecha(date) || "Fecha desconocida"}</span>
      </div>
      <p className="comment--text">{comment || "Sin comentario disponible."}</p>
    </div>
  );
};

export default Comment;
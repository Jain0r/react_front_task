import React from "react";
import "./index.scss";
const Comment = ({ user, comment, date }) => {
  return (
    <div className="comment--container">
      <strong>{user || "Comentario de User"}</strong>
      <p>{comment || "Comment"}</p>
      <p>{date || "Fecha"}</p>
    </div>
  );
};

export default Comment;

import React from "react";
import "./todo.css";
function TodoCard({ id, title, body, deletion }) {
  return (
    <div>
      <div
        style={{
          minWidth: "150px",
          minHeight: "200px",
          border: "4px solid  rgba(52, 5, 221, 1)",
          borderTop: "none",
          borderRadius: "10px",
        }}
        className="d-flex flex-column anim "
      >
        <div
          style={{
            padding: "13px",
            background: " rgba(31, 15, 39, 0.45)  ",
            width: "100%",
            color: "white",
          }}
          className="d-flex justify-content-between "
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                overflow: "hidden ",
                maxWidth: "75px",
              }}
            >
              {title}
            </h3>
          </div>
          <div className="d-flex gap-3 justfiy-content-center">
            <button
              className="btne"
              onClick={() => {
                deletion(id);
                console.log(id);
              }}
            >
              <i className="bi bi-trash3 del"></i>
            </button>
            <button className="btne">
              <i className="bi bi-pencil-fill edit"></i>
            </button>
          </div>
        </div>
        <div
          style={{
            padding: "13px",
            background: " rgba(216, 203, 15, 1)  ",
            flex: "1",
            overflow: "none",
          }}
        >
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;

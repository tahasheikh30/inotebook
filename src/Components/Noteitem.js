import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const cardStyle = {
    backgroundColor: props.mode === "dark" ? "#343a40" : "white",
    color: props.mode === "dark" ? "white" : "black",
    border: props.mode === "dark" ? "1px solid #495057" : "1px solid #ced4da",
  };

  const tagStyle = {
    color: props.mode === "dark" ? "#adb5bd" : "#6c757d",
  };

  return (
    <div className="col-md-3">
      <div className="card my-3" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2" style={tagStyle}>
            {note.tag}
          </h6>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-between mt-4">
            <i
              className="fa-solid fa-trash"
              style={{ color: props.mode === "dark" ? "white" : "black" }}
              onClick={() => {
                deleteNote(note._id); // First function call to delete the note
                props.showAlert("Note Deleted!", "danger"); // Second function call to show the alert
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => {
                updateNote(note);
              }}
              style={{ color: props.mode === "dark" ? "white" : "black" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

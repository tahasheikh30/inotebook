import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "./Noteitem.css";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-3">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front side of the card */}
          <div className={props.mode === "dark" ? "flip-card-front" : "flip-card-front-light"}>
            <p className="title">{note.title}</p>
            <p>{note.tag}</p>
          </div>

          {/* Back side of the card */}
          <div className={props.mode === "dark" ? "flip-card-back" : "flip-card-back-light"}>
            <p className="title">Description</p>
            <p>{note.description}</p>
            <div className="d-flex justify-content-between mt-3">
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note Deleted!", "danger");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

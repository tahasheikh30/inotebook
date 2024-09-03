import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import { Addnote } from "./Addnote";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <Addnote
        mode={props.mode}
        toggleMode={props.toggleMode}
        showAlert={props.showAlert}
      />
      <div className="row my-3">
        <h2>All notes</h2>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              note={note}
              mode={props.mode}
              toggleMode={props.toggleMode}
              showAlert={props.showAlert}
            />
          );
        })}
      </div>
    </>
  );
}

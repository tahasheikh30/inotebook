import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
import { Addnote } from "./Addnote";
import EditNoteModal from "./EditNoteModal"; // Import the new component
import "./Note.css";

export default function Notes(props) {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null); // Ref to close the modal
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    enoteText: "",
    ecustomTag: "",
  });
  const [isCustomTag, setIsCustomTag] = useState(false);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      ecustomTag: currentNote.customTag,
      enoteText: currentNote.noteText,
    });
  };

  const handleUpdateNote = (event) => {
    event.preventDefault();
    const tagToUse = isCustomTag ? note.ecustomTag : note.etag;
    editNote(note.id, note.etitle, note.edescription, tagToUse, note.enoteText);
    props.showAlert("Note updated successfully!", "success");
    refClose.current.click(); // Close the modal after updating
  };

  const onChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleTagChange = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag === "Custom") {
      setIsCustomTag(true);
    } else {
      setIsCustomTag(false);
    }
    setNote({ ...note, etag: selectedTag });
  };

  return (
    <>
      {/* Center: Search bar */}
      <div
        className="search-bar-container"
        style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
      >
        <form className="d-flex" role="search" style={{ width: "50%" }}>
          {" "}
          {/* Adjust the form width to half */}
          <input
            className={`form-control me-2 ${
              props.mode === "dark" ? "dark-mode" : ""
            }`}
            type="search"
            placeholder="Search note"
            aria-label="Search"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
              width: "100%", // Make the input take up the full width of the form
            }}
          />
          <button
            className="cssbuttons-io-button"
            type="submit"
            style={{ marginLeft: "10px" }}
          >
            Search
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </form>
      </div>
      <Addnote
        mode={props.mode}
        toggleMode={props.toggleMode}
        showAlert={props.showAlert}
      />

      {/* Trigger button for opening the modal */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#editNoteModal"
      >
        Launch Edit Note Modal
      </button>

      <EditNoteModal
        note={note}
        onChange={onChange}
        handleTagChange={handleTagChange}
        handleUpdateNote={handleUpdateNote}
        isCustomTag={isCustomTag}
        setIsCustomTag={setIsCustomTag}
        mode={props.mode}
        refClose={refClose}
      />

      <div className="row my-3">
        <h2
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          Your Notes
        </h2>
        <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={props.showAlert}
              mode={props.mode}
            />
          );
        })}
      </div>
    </>
  );
}



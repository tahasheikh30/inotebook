import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import Noteitem from "./Noteitem";
import { Addnote } from "./Addnote";
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
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    enoteText: "",
    ecustomTag: "",
  });
  const [isCustomTag, setIsCustomTag] = useState(false); // New state to track custom tag

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

    // Determine whether to use a predefined tag or custom tag
    const tagToUse = isCustomTag ? note.ecustomTag : note.etag;

    // Call editNote with the selected or custom tag
    editNote(note.id, note.etitle, note.edescription, tagToUse, note.enoteText);
    props.showAlert("Note updated successfully!", "success");
    // Close the modal after updating the note
    refClose.current.click();
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
      setIsCustomTag(true); // Show custom tag input if "Custom" is selected
    } else {
      setIsCustomTag(false);
    }
    // Update etag for editing
    setNote({ ...note, etag: selectedTag });
  };

  return (
    <>
      {/* Center: Search bar */}
      <div
        className="search-bar-container"
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
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

      {/* Modal for edit note */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: props.mode === "dark" ? "#0d0d0f" : "#f8f9fa", // Dark background for dark mode
              color: props.mode === "dark" ? "white" : "black", // Text color adjustment
              border:
                props.mode === "dark"
                  ? "1px solid #f8f9fa"
                  : "1px solid #343a40", // Border adjustment
            }}
          >
            <div
              className="modal-header"
              style={{
                backgroundColor: props.mode === "dark" ? "#000000" : "#ffffff", // Dark header background
                color: props.mode === "dark" ? "white" : "black", // Header text color
              }}
            >
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  filter: props.mode === "dark" ? "invert(1)" : "none", // Invert the close button color in dark mode
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div
                className="form-outer-container"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "#0d0d0f" : "#f8f9fa",
                  color: props.mode === "dark" ? "white" : "black",
                  border:
                    props.mode === "dark"
                      ? "1px solid #f8f9fa"
                      : "1px solid #343a40",
                }}
              >
                <div className="form-container">
                  <form>
                    {/* Existing form inputs (Title, Description, Tag, Custom Tag, Note Text) */}
                    {/* Title */}
                    <div className="form-group">
                      <label
                        htmlFor="title"
                        className={`form-label text-${
                          props.mode === "light" ? "dark" : "light"
                        }`}
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="etitle"
                        name="etitle"
                        className="form-input"
                        placeholder="Enter title"
                        onChange={onChange}
                        value={note.etitle}
                        style={{
                          backgroundColor:
                            props.mode === "dark" ? "#212529" : "white",
                          color: props.mode === "dark" ? "white" : "black",
                        }}
                      />
                    </div>

                    {/* Description */}
                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className={`form-label text-${
                          props.mode === "light" ? "dark" : "light"
                        }`}
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        id="edescription"
                        name="edescription"
                        className="form-input"
                        placeholder="Enter description"
                        onChange={onChange}
                        value={note.edescription}
                        style={{
                          backgroundColor:
                            props.mode === "dark" ? "#212529" : "white",
                          color: props.mode === "dark" ? "white" : "black",
                        }}
                      />
                    </div>

                    {/* Tag and Custom Tag */}
                    <div className="form-group">
                      <label
                        htmlFor="tag"
                        className={`form-label text-${
                          props.mode === "light" ? "dark" : "light"
                        }`}
                      >
                        Tag
                      </label>
                      <select
                        id="etag"
                        name="etag"
                        className="form-select"
                        onChange={handleTagChange}
                        value={note.etag}
                        style={{
                          backgroundColor:
                            props.mode === "dark" ? "#212529" : "white",
                          color: props.mode === "dark" ? "white" : "black",
                        }}
                      >
                        <option value=""></option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Important">Important</option>
                        <option value="Finance">Finance</option>
                        <option value="Others">Others</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>

                    {/* Conditionally render custom tag input */}
                    {isCustomTag && (
                      <div className="form-group">
                        <label
                          htmlFor="customTag"
                          className={`form-label text-${
                            props.mode === "light" ? "dark" : "light"
                          }`}
                        >
                          Custom Tag
                        </label>
                        <input
                          type="text"
                          id="ecustomTag"
                          name="ecustomTag"
                          className="form-input"
                          placeholder="Enter custom tag"
                          onChange={onChange}
                          value={note.ecustomTag}
                          style={{
                            backgroundColor:
                              props.mode === "dark" ? "#212529" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                          }}
                        />
                      </div>
                    )}

                    {/* Note Text */}
                    <div className="form-group">
                      <label
                        htmlFor="noteText"
                        className={`form-label text-${
                          props.mode === "light" ? "dark" : "light"
                        }`}
                      >
                        Note
                      </label>
                      <textarea
                        id="enoteText"
                        name="enoteText"
                        className="form-textarea"
                        placeholder="Write your note here..."
                        onChange={onChange}
                        value={note.enoteText}
                        style={{
                          backgroundColor:
                            props.mode === "dark" ? "#212529" : "white",
                          color: props.mode === "dark" ? "white" : "black",
                        }}
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{
                backgroundColor: props.mode === "dark" ? "#000000" : "#f8f9fa", // Footer background color
              }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNote}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          All notes
        </h2>
        {notes.length === 0 && (
          <div
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            No notes to display
          </div>
        )}
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
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

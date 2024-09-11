import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "./Addnote.css";

export const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
    noteText: "",
    customTag: "",
  });
  const [isCustomTag, setIsCustomTag] = useState(false); // New state to track custom tag

  const handleAddNote = (event) => {
    event.preventDefault();

    // Check if all fields are empty
    if (!note.title && !note.description && !note.tag && !note.noteText) {
      props.showAlert("Empty note discarded", "warning"); // Display alert
      return; // Stop further execution
    }

    const tagToUse = isCustomTag ? note.customTag : note.tag; // Use custom tag if selected
    addNote(note.title, note.description, tagToUse, note.noteText);

    // Optionally clear the note fields after submission
    setNote({
      title: "",
      description: "",
      tag: "",
      noteText: "",
      customTag: "",
    });
    setIsCustomTag(false); // Reset custom tag state
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
    setNote({ ...note, tag: selectedTag });
  };

  return (
    <div>
      <div
        className="card-addnote"
        style={{
          backgroundColor: props.mode === "dark" ? "#19191a" : "#F8FBFE",
          color: props.mode === "dark" ? "white" : "black",
          border:
            props.mode === "dark" ? "1px solid #343a40" : "1px solid #f8f9fa",
        }}
      >
        <div className="tools-addnote">
          <div className="circles-container">
            <div className="circle-addnote">
              <span className="red box-addnote"></span>
            </div>
            <div className="circle-addnote">
              <span className="yellow box-addnote"></span>
            </div>
            <div className="circle-addnote">
              <span className="green box-addnote"></span>
            </div>
          </div>
          <h2 className="heading-addnote">New Note</h2>
        </div>

        <div className="card__content">
          <form>
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
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter title"
                onChange={onChange}
                value={note.title}
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
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
                id="description"
                name="description"
                className="form-input"
                placeholder="Enter description"
                onChange={onChange}
                value={note.description}
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              />
            </div>

            {/* Tag Dropdown */}
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
                id="tag"
                name="tag"
                className="form-select"
                onChange={handleTagChange}
                value={note.tag}
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
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

            {/* Custom Tag Input */}
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
                  id="customTag"
                  name="customTag"
                  className="form-input"
                  placeholder="Enter custom tag"
                  onChange={onChange}
                  value={note.customTag}
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
                id="noteText"
                name="noteText"
                className="form-textarea"
                placeholder="Write your note here..."
                onChange={onChange}
                value={note.noteText}
                style={{
                  backgroundColor: props.mode === "dark" ? "#212529" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button-addnote"
              onClick={handleAddNote}
            >
              ADD NOTE
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="icon-addnote"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

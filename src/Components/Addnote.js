import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

export const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "", noteText: "", customTag: "" });
  const [isCustomTag, setIsCustomTag] = useState(false); // New state to track custom tag

  const handleAddNote = (event) => {
    event.preventDefault();
    const tagToUse = isCustomTag ? note.customTag : note.tag; // Use custom tag if selected
    addNote(note.title, note.description, tagToUse);
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
        className="form-outer-container"
        style={{
          backgroundColor: props.mode === "dark" ? "#19191a" : "#f8f9fa",
          color: props.mode === "dark" ? "white" : "black",
          border:
            props.mode === "dark" ? "1px solid #f8f9fa" : "1px solid #343a40",
        }}
      >
        <div className="form-container">
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
                <option value="Custom">Custom</option> {/* Custom option */}
              </select>
            </div>

            {/* Custom Tag Input (conditionally shown) */}
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
                    backgroundColor: props.mode === "dark" ? "#212529" : "white",
                    color: props.mode === "dark" ? "white" : "black",
                  }}
                />
              </div>
            )}

            {/* Note Textarea */}
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
              className={`btn btn-${props.mode === "dark" ? "light" : "dark"}`}
              onClick={handleAddNote}
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

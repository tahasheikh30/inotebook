// src/components/EditNoteModal.js
import React, { useState } from "react";
import "./EditNoteModal.css";

const EditNoteModal = ({
  note,
  onChange,
  handleTagChange,
  handleUpdateNote,
  isCustomTag,
  setIsCustomTag,
  mode,
  refClose,
}) => {
  // Use local state for handling custom tag
  const [localIsCustomTag, setLocalIsCustomTag] = useState(isCustomTag);

  const handleLocalTagChange = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag === "Custom") {
      setLocalIsCustomTag(true); // Show custom tag input if "Custom" is selected
    } else {
      setLocalIsCustomTag(false);
    }
    handleTagChange(event); // Update parent component state
  };

  return (
    <div
      className="modal fade"
      id="editNoteModal"
      tabIndex="-1"
      aria-labelledby="editNoteModalLabel"
      aria-hidden="true"
    >
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>

      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            backgroundColor: mode === "dark" ? "#0d0d0f" : "#f8f9fa",
            color: mode === "dark" ? "white" : "black",
            border: mode === "dark" ? "1px solid #f8f9fa" : "1px solid #343a40",
          }}
        >
          <div
            className="modal-header"
            style={{
              backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <h1 className="modal-title fs-5" id="editNoteModalLabel">
              Edit Note
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{
                filter: mode === "dark" ? "invert(1)" : "none",
              }}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              {/* Title */}
              <div className="form-group">
                <label
                  htmlFor="etitle"
                  className={`form-label text-${
                    mode === "light" ? "dark" : "light"
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
                    backgroundColor: mode === "dark" ? "#212529" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                />
              </div>

              {/* Description */}
              <div className="form-group">
                <label
                  htmlFor="edescription"
                  className={`form-label text-${
                    mode === "light" ? "dark" : "light"
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
                    backgroundColor: mode === "dark" ? "#212529" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                />
              </div>

              {/* Tag and Custom Tag */}
              <div className="form-group">
                <label
                  htmlFor="etag"
                  className={`form-label text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Tag
                </label>
                <select
                  id="etag"
                  name="etag"
                  className="form-select"
                  onChange={handleLocalTagChange}
                  value={note.etag}
                  style={{
                    backgroundColor: mode === "dark" ? "#212529" : "white",
                    color: mode === "dark" ? "white" : "black",
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
              {localIsCustomTag && (
                <div className="form-group">
                  <label
                    htmlFor="ecustomTag"
                    className={`form-label text-${
                      mode === "light" ? "dark" : "light"
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
                      backgroundColor: mode === "dark" ? "#212529" : "white",
                      color: mode === "dark" ? "white" : "black",
                    }}
                  />
                </div>
              )}

              {/* Note Text */}
              <div className="form-group">
                <label
                  htmlFor="enoteText"
                  className={`form-label text-${
                    mode === "light" ? "dark" : "light"
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
                    backgroundColor: mode === "dark" ? "#212529" : "white",
                    color: mode === "dark" ? "white" : "black",
                  }}
                ></textarea>
              </div>
            </form>
          </div>
          <div
            className="modal-footer"
            style={{
              backgroundColor: mode === "dark" ? "#000000" : "#f8f9fa",
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
  );
};

export default EditNoteModal;

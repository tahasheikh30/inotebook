import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://inotes-backend-webservice.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag, noteText) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, noteText }),
    });
    const note = await response.json(); // Use the response to get the actual note data
    setNotes([...notes, note]); // Use spread operator to add the new note
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag, noteText) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, noteText }),
    });
    const json = await response.json();
    console.log(json);

    const updatedNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag, noteText } : note
    );
    setNotes(updatedNotes);
  };

  // Search Note
  const searchNote = async (searchTerm) => {
    try {
      const response = await fetch(
        `${host}/api/notes/searchnotes/${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setNotes(json); // The backend returns the notes array directly
      } else {
        console.error(json.message); // Log the error message
        // Handle error display to the user (e.g., no notes found, empty search, etc.)
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      // Optionally show a user-friendly error message in the UI
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes, searchNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

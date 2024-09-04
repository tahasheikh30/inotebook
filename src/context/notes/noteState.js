import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQyZTg4OTMyNWI3YzA3ZTAyMWM3NmUiLCJpYXQiOjE3MjU0ODExNzgsImV4cCI6MTcyNTQ4NDc3OH0.Y6buBWDG8f-ve0BkT0t4SfhhLndvO0szRJPVQybprIA",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQyZTg4OTMyNWI3YzA3ZTAyMWM3NmUiLCJpYXQiOjE3MjU0ODExNzgsImV4cCI6MTcyNTQ4NDc3OH0.Y6buBWDG8f-ve0BkT0t4SfhhLndvO0szRJPVQybprIA",
      },
      body: JSON.stringify({ title, description, tag }),
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQyZTg4OTMyNWI3YzA3ZTAyMWM3NmUiLCJpYXQiOjE3MjU0ODExNzgsImV4cCI6MTcyNTQ4NDc3OH0.Y6buBWDG8f-ve0BkT0t4SfhhLndvO0szRJPVQybprIA",
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQyZTg4OTMyNWI3YzA3ZTAyMWM3NmUiLCJpYXQiOjE3MjU0ODExNzgsImV4cCI6MTcyNTQ4NDc3OH0.Y6buBWDG8f-ve0BkT0t4SfhhLndvO0szRJPVQybprIA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const updatedNotes = notes.map((note) =>
      note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
const notesInitial = [
  {
    _id: "66d35e635b9bbdf62f4143c4",
    user: "66d2e889325b7c07e021c76e",
    title: "My title",
    description: "Test entry",
    tag: "personal",
    date: "2024-08-31T18:18:11.813Z",
    __v: 0
  },
  {
    _id: "66d35e7d5b9bbdf62f4143c6",
    user: "66d2e889325b7c07e021c76e",
    title: "To-do list",
    description: "Daily tasks",
    tag: "personal",
    date: "2024-08-31T18:18:37.992Z",
    __v: 0
  }
]
const [notes, setNotes] = useState(notesInitial)
  return (
    <noteContext.Provider value={{notes, setNotes}}>{props.children}</noteContext.Provider>
  );
};
export default NoteState;

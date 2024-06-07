import { useContext } from "react";
import { useRef } from "react";
import { NotesContext } from "../store/notes-context";
import classes from "./AddNotes.module.css";

const AddNotes = ({ onCloseAddNotes }) => {
  const notesContext = useContext(NotesContext);
  const titleInput = useRef();
  const detailsInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    notesContext.addNotes({
      id: Math.random().toString(16).slice(2),
      title: titleInput.current.value,
      details: detailsInput.current.value,
    });
  };
  return (
    <>
      <div className={classes.backdrop}></div>

      <div className={classes.addArea}>
        <form onSubmit={submitHandler}>
          <label>Notes Title</label>
          <input ref={titleInput} type="text" id="notesTitle" />
          <br />
          <label>Notes Details</label>
          <input ref={detailsInput} type="text" id="notesDetails" />
          <br />
          <button type="submit">Add Notes</button>
        </form>
        <br />
        <br />
        <button onClick={onCloseAddNotes}>close</button>
      </div>
    </>
  );
};

export default AddNotes;

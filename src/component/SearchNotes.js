import { useState, useContext, useRef } from "react";
import AddNotes from "./AddNotes";
import { NotesContext } from "../store/notes-context";
const SearchNotes = (props) => {
  const notesContext = useContext(NotesContext);
  const searchRef = useRef();

  const onChangeHandler = () => {
    notesContext.searchNotes(searchRef.current.value);
  };
  return (
    <div>
      <label>Search Title</label>
      <input
        ref={searchRef}
        type="text"
        id="searchTitle"
        onChange={onChangeHandler}
      />
      <p>Total : {notesContext.notes.total}</p>
      <p>Current Value : {notesContext.notes.current}</p>
      <button
        onClick={() => {
          props.onAddNotes();
        }}
      >
        AddNotes
      </button>
    </div>
  );
};

export default SearchNotes;

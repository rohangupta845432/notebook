import NotesList from "./NoteList";
import { NotesContext } from "../store/notes-context";
import { useContext } from "react";
const NotesLists = (props) => {
  const notesContext = useContext(NotesContext);

  const deleteHandler = (id) => {
    notesContext.deleteNote(id);
  };
  return (
    <div>
      {notesContext.notes.notes
        .filter((note) => {
          return note.title.includes(notesContext.notes.searchValue);
        })
        .map((note) => {
          return (
            <NotesList
              key={note.id}
              id={note.id}
              title={note.title}
              details={note.details}
              onDeleteHandler={deleteHandler}
            />
          );
        })}
    </div>
  );
};

export default NotesLists;

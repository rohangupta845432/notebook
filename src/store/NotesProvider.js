import { useReducer } from "react";
import { NotesContext } from "./notes-context";
const defaultValue = {
  notes: [
    {
      id: "1",
      title: "dfdasds",
      details: "sdasfdasf dfds dfda df",
    },
    {
      id: "2",
      title: "dfdahkjhkjsds",
      details: "sdasfdasf dfds dfda df",
    },
    {
      id: "3",
      title: "888888",
      details: "sdasfdasf dfds dfda df",
    },
  ],
  total: 3,
  current: 3,
  searchValue: "",
};

const notesReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      notes: [...state.notes, action.data],
      total: [...state.notes, action.data].length,
      current: [...state.notes, action.data].length,
      searchValue: "",
    };
  }

  if (action.type === "DELETE") {
    const newData = state.notes.filter((note) => {
      return note.id != action.id;
    });
    console.log(state.notes);
    console.log(newData);
    return {
      notes: newData,
      total: newData.length,
      current: newData.length,
      searchValue: "",
    };
  }

  if (action.type === "SEARCH") {
    return {
      notes: state.notes,
      total: state.notes.length,
      current: state.notes.filter((note) => {
        return note.title.includes(action.searchText);
      }).length,
      searchValue: action.searchText,
    };
  }
  return {
    notes: state.notes,
    total: state.notes.length,
  };
};

const NotesProvider = (prop) => {
  const [notesState, dispatchNotesAction] = useReducer(
    notesReducer,
    defaultValue
  );

  const addNotes = (noteData) => {
    console.log(noteData);
    dispatchNotesAction({ type: "ADD", data: noteData });
  };

  const deleteNote = (id) => {
    console.log(id);
    dispatchNotesAction({ type: "DELETE", id: id });
  };

  const searchNotes = (searchText) => {
    console.log(searchText);
    dispatchNotesAction({ type: "SEARCH", searchText: searchText });
  };
  const notesProvider = {
    notes: notesState,
    addNotes: addNotes,
    deleteNote: deleteNote,
    searchNotes: searchNotes,
  };
  return (
    <NotesContext.Provider value={notesProvider}>
      {prop.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;

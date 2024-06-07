import logo from "./logo.svg";
import "./App.css";
import SearchNotes from "./component/SearchNotes";
import NotesProvider from "./store/NotesProvider";
import NotesLists from "./component/NoteLists";
import { useState } from "react";
import AddNotes from "./component/AddNotes";

function App() {
  const [showAddNotes, SetShowAddNotes] = useState(false);
  const onAddNotesHandler = () => {
    SetShowAddNotes(true);
  };

  const onCloseAddNoteHandler = () => {
    SetShowAddNotes(false);
  };
  return (
    <NotesProvider>
      {showAddNotes && <AddNotes onCloseAddNotes={onCloseAddNoteHandler} />}
      <SearchNotes onAddNotes={onAddNotesHandler} />
      <NotesLists />
    </NotesProvider>
  );
}

export default App;

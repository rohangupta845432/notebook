import Card from "./UI/Card";
const NotesList = (props) => {
  return (
    <Card>
      <h1>{props.title}</h1>
      <p>{props.details}</p>
      <button onClick={() => props.onDeleteHandler(props.id)}>Delete</button>
    </Card>
  );
};

export default NotesList;

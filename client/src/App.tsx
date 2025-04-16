import React from "react";
import "./App.css";

const req = () => {
  const url = `${window.origin}/notes`;
  const res = fetch(url).then((res) => res.json());

  return res;
};

export function App() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    req().then((data) => setNotes(data));
  }, []);

  return (
    <ul>
      {notes.map((note) => (
        <li>{note.text}</li>
      ))}
    </ul>
  );
}

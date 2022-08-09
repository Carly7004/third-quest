import React, { useState } from "react";
import './NoteApp.css';
function CreatingNew() {
  const [note, setNote] = useState([]);

  const newNote = () => {
    return <textarea placeholder="new note"></textarea>;
  };
  console.log(newNote);

  const onAddBtn = (e) => {
    e.preventDefault();
    setNote([...note, newNote]);
    // setNote((current) => current + 1);
  };

  console.log(note);

  return (
    <div>
      <button onClick={onAddBtn}>Add Note</button>

      <div>
        {note.map((newnotes, index) => (
            <textarea className="note" placeholder="New Note" key={index}>
              {newnotes}
            </textarea>
          
        ))}
      </div>
    </div>
  );
}

export default CreatingNew;

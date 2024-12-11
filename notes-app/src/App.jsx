import React, { useState } from 'react';
import NoteForm from './components/Form';
import NoteList from './components/NoteList';
import Background from './assets/background.jpg'
 
export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className='h-screen w-full grid place-content-center' style={{ backgroundImage: `url(${Background})` }}>
      <div className="backdrop-blur-sm p-10 h-[35rem] w-[25rem] rounded-xl shadow-[0px_0px_25px_black]">
        <h1 className="text-3xl font-bold mb-4 text-slate-200 text-center">Note-Taking App</h1>
        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </div>
    </div>
  );
}

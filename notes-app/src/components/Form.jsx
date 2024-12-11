import React, { useState } from 'react';

export default function NoteForm ({ onAdd }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim()) {
      onAdd(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border p-2 w-full mb-2 rounded-md outline-none"
        placeholder="Add a new note..."
      />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded"
      >
        Add Note
      </button>
    </form>
  );
};

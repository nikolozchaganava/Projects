import React from 'react'
import Note from './Note';

export default function NoteList({ notes, onDelete }) {
    return (
        <div>
            {notes.map((note, index) => (
                <Note key={index} note={note} onDelete={() => onDelete(index)} />))}
        </div>
    );
}

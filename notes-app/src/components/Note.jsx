import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function Note({ note, onDelete }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center gap-2">
            <p>{note}</p>
            <button onClick={onDelete} className="bg-red-600 text-white px-2 py-1 rounded-xl flex items-center gap-2 hover:bg-red-700 transition-all relative"> Delete <FaTrash /></button>
        </div>
    );
}
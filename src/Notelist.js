import React from 'react'
import dummy from './dummy-store'
import { NavLink, Link } from 'react-router-dom'


export default function NoteListPage(props) {
  return (
    <>
      <p>Choose a folder from the list below.</p>
      <ul className='NoteList'>
        {props.notes.map(note =>
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>
              {note.name}
              </Link>
          </li>
        )}
      </ul>
    </>
  )
}


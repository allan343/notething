import React from 'react'
import dummy from './dummy-store'
import { Link } from 'react-router-dom'

export default function FolderListPage() {
  return (
    <>
      <p>Choose a folder from the list below.</p>
      <ul className='FolderList'>
        {this.props.folders.map(folder =>
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>
              {folder.title}
              </Link>
          </li>
        )}
      </ul>
    </>
  )
}

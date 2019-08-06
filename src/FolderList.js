import React from 'react'
import dummy from './dummy-store'
import { NavLink, Link } from 'react-router-dom'


export default function FolderListPage(props) {
  return (
    <>
      <p>Choose a folder from the list below.</p>
      <ul className='FolderList'>
        {props.folders.map(folder =>
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>
              {folder.name}
              </Link>
          </li>
        )}
      </ul>
    </>
  )
}

FolderListPage.defaultProps = {
    folders: []
  }
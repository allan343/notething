import React from 'react'


export default function NotePage(props) {

  return (
    <article className='Note'>
      <h2>{props.note.name}</h2>
     {props.note.content}
    </article>
  )
}

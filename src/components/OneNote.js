import React from 'react'
import '../styles/OneNote.css'

export default function OneNote(props) {
  return (
    <div id='NoteContainer'>
      <h2 id='incomingTitle'>{props.title}</h2>
      <div id='incomingContent'>{props.content}</div>
    </div>
  )
}

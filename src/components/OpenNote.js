import React from 'react'
import "../styles/OpenNote.css"
import { useParams } from 'react-router-dom'

export default function OpenNote() {
  const param=useParams()
  return (
    <div id='container'>
      <h1>Working id:{param.id}</h1>
    </div>
  )
}
